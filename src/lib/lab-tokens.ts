/**
 * Lecture de src/styles/tokens.css au build, pour la page interne /lab/ : la vitrine
 * suit le fichier sans recopie à la main. Chaque variable garde son groupe (commentaire
 * seul sur sa ligne qui la précède), son commentaire de fin de ligne et sa valeur sombre.
 */
import css from '../styles/tokens.css?raw';

export interface Token {
  name: string;
  value: string;
  /** Valeur avec les var(--…) remplacés, quand elle en contient. */
  resolved?: string;
  /** Valeur du bloc :root[data-theme='dark'], si elle diffère. */
  dark?: string;
  darkResolved?: string;
  /** Commentaire de fin de ligne. */
  note?: string;
  /** Première ligne du commentaire de groupe qui précède. */
  group: string;
}

/** Corps du premier bloc qui commence par `selector {`. */
function block(selector: string): string {
  const start = css.indexOf(`${selector} {`);
  if (start === -1) return '';
  const open = css.indexOf('{', start);
  let depth = 0;
  for (let i = open; i < css.length; i++) {
    if (css[i] === '{') depth++;
    else if (css[i] === '}' && --depth === 0) return css.slice(open + 1, i);
  }
  return '';
}

const clean = (comment: string) =>
  comment
    .replace(/^\/\*+|\*+\/$/g, '')
    .split('\n')
    .map((line) => line.replace(/^\s*\*\s?/, '').trim())
    .filter(Boolean);

/** Déclarations d'un bloc, dans l'ordre, avec groupe et commentaire. */
function parse(body: string): Token[] {
  const tokens: Token[] = [];
  let group = '';
  let afterGroup = false;
  const pattern = /\/\*[\s\S]*?\*\/|(--[\w-]+)\s*:\s*([^;]+);/g;
  for (const match of body.matchAll(pattern)) {
    const [text, name, value] = match;
    if (name && value) {
      tokens.push({ name, value: value.trim().replace(/\s+/g, ' '), group });
      afterGroup = false;
      continue;
    }
    // Commentaire seul sur sa ligne : nouveau groupe (le premier d'une suite de commentaires).
    // Sinon : note de la déclaration précédente.
    const lineStart = body.lastIndexOf('\n', match.index) + 1;
    const alone = body.slice(lineStart, match.index).trim() === '';
    const lines = clean(text);
    if (alone) {
      if (!afterGroup) group = lines[0] ?? '';
      afterGroup = true;
    } else if (tokens.length > 0) tokens[tokens.length - 1]!.note = lines.join(' ');
  }
  return tokens;
}

const light = parse(block(':root'));
const darkValues = new Map(parse(block(":root[data-theme='dark']")).map((t) => [t.name, t.value]));
const lightValues = new Map(light.map((t) => [t.name, t.value]));

function resolve(value: string, values: Map<string, string>, depth = 0): string {
  if (depth > 5) return value;
  return value.replace(/var\((--[\w-]+)\)/g, (all, name: string) => {
    const next = values.get(name) ?? lightValues.get(name);
    return next === undefined ? all : resolve(next, values, depth + 1);
  });
}

const darkMerged = new Map([...lightValues, ...darkValues]);

export const TOKENS: Token[] = light.map((token) => {
  const dark = darkValues.get(token.name);
  const resolved = resolve(token.value, lightValues);
  const darkResolved = dark === undefined ? undefined : resolve(dark, darkMerged);
  return {
    ...token,
    resolved: resolved === token.value ? undefined : resolved,
    dark: dark !== undefined && dark !== token.value ? dark : undefined,
    darkResolved: darkResolved !== undefined && darkResolved !== dark ? darkResolved : undefined,
  };
});

/** Tokens d'un groupe (début du commentaire de groupe, sans casse). */
export const inGroup = (prefix: string) =>
  TOKENS.filter((t) => t.group.toLowerCase().startsWith(prefix.toLowerCase()));

/** Tokens dont le nom commence par l'un des préfixes. */
export const byPrefix = (...prefixes: string[]) =>
  TOKENS.filter((t) => prefixes.some((prefix) => t.name.startsWith(prefix)));

/** Une valeur se lit comme une couleur (hex, rgb, var vers une couleur). */
export const isColor = (token: Token) => /^(#|rgba?\()/.test(token.resolved ?? token.value);
