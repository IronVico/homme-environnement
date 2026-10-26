/**
 * Géométrie du Burkina Faso pour la carte de la page pays (BurkinaMap) : contour
 * du pays dans un repère de 640 × 440 (maquette PaysBurkina). Les repères des sites
 * (mapPosition, en %) sont exprimés dans ce même repère.
 */

export const COUNTRY_WIDTH = 640;
export const COUNTRY_HEIGHT = 440;
export const COUNTRY_VIEWBOX = `0 0 ${COUNTRY_WIDTH} ${COUNTRY_HEIGHT}`;

/** Centre des transformations (lavis, courbes de niveau). */
export const COUNTRY_CENTER = { x: 320, y: 222 };

/** Contour du pays (maquette PaysBurkina). */
export const COUNTRY_PATH =
  'M24.0 364.1C18.7 352.8 28.9 338.8 32.9 321.9C36.9 305.0 33.3 283.4 46.2 270.1C59.1 256.8 92.4 261.2 104.7 247.9C116.9 234.6 108.2 215.7 114.3 196.1C120.4 176.5 122.7 150.5 138.7 139.1C154.7 127.8 189.5 139.6 203.1 133.2C216.7 126.8 202.2 112.9 214.2 103.6C226.2 94.3 253.0 88.5 269.7 81.4C286.3 74.4 290.7 74.1 306.7 64.4C322.7 54.7 341.8 35.4 358.5 27.4C375.1 19.4 382.8 20.1 399.2 20.0C415.6 19.9 438.8 16.7 449.5 26.7C460.2 36.6 459.2 62.3 458.4 75.5C457.6 88.7 437.1 86.6 445.1 99.9C453.1 113.2 491.7 134.2 502.8 149.5C513.8 164.8 490.1 175.7 506.5 185.0C522.9 194.3 575.2 193.3 593.8 201.3C612.4 209.3 611.1 219.7 610.1 229.4C609.0 239.1 601.2 242.7 587.9 255.3C574.6 268.0 552.1 287.7 536.1 299.7C520.1 311.7 517.7 318.2 499.1 321.9C480.4 325.6 453.8 320.2 432.5 320.4C411.2 320.7 402.0 323.5 380.7 323.4C359.4 323.3 342.1 319.7 314.1 319.7C286.1 319.7 242.6 313.7 225.3 323.4C208.0 333.1 217.2 355.3 217.9 373.7C218.5 392.1 233.0 420.2 229.0 425.5C225.0 430.8 207.0 407.3 195.7 403.3C184.4 399.3 180.7 399.3 166.1 403.3C151.4 407.3 128.9 422.9 114.3 425.5C99.6 428.2 94.0 425.4 84.7 418.1C75.4 410.8 73.4 394.5 62.5 384.8C51.6 375.1 29.3 375.4 24.0 364.1Z';

/** Ouagadougou, dans le repère de la carte. */
export const CAPITAL = { x: 320, y: 220.5 };

/** Position des noms des pays voisins, dans l'ordre de burkina.sites.map.neighbours (src/i18n). */
export const NEIGHBOUR_POSITIONS = [
  { x: 120, y: 60 },
  { x: 560, y: 150 },
  { x: 300, y: 400 },
  { x: 48, y: 412 },
  { x: 470, y: 392 },
  { x: 585, y: 330 },
];
