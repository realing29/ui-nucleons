export const DEFAULT_CURRENCY_NAME = 'RUB';

export const USER_DEFAULT_PARAMS = {
  currency: DEFAULT_CURRENCY_NAME,
  sort: 'createdAt',
  per_page: 20,
  'per-page': 20,
  viewtype: 'list',
};

export const graphemes = ['₽', '€', '$', '₴', 'Br'];

/**
 * Набор типов содержимого модификатора.
 * @type {Object}
 */
export const MODIFIERS_TYPES = Object.freeze({
  text: 'text',
  image: 'image',
  color: 'color',
});

/**
 * Цвета дизайн системы.
 */
export const COLORS = new Map(Object.entries({
  // basic
  black: '#000',
  white: '#fff',

  // brand
  'brand-blue': '#1f84db',
  'brand-dark-blue': '#002b41',
  'brand-deep-blue': '#00599d',
  'brand-dirty': '#80b4d2',
  'brand-sky': '#e4f1f9',

  // gray
  gray87: '#212121',
  gray76: '#3a3a3b',
  gray66: '#545455',
  gray54: '#757575',
  gray38: '#9e9e9e',
  gray24: '#c2c2c2',
  gray12: '#e0e0e0',
  gray8: '#ebebeb',
  gray4: '#f5f5f5',
  gray2: '#fafafa',

  // additional
  'additional-amber': '#ffab00',
  'additional-blue-gray': '#607d8b',
  'additional-blue': '#2962ff',
  'additional-brown': '#795548',
  'additional-cyan': '#00b8d4',
  'additional-deep-orange': '#ff7200',
  'additional-deep-purple': '#634bdf',
  'additional-deep-red': '#d50000',
  'additional-faded-green': '#eff9ea',
  'additional-fog': '#e9f1f4',
  'additional-grass': '#66cb2f',
  'additional-green': '#00c853',
  'additional-light-blue': '#0091ea',
  'additional-light-green': '#64dd17',
  'additional-light-red': '#feebea',
  'additional-lime': '#aeea00',
  'additional-pink': '#e82e5c',
  'additional-purple': '#b52ea8',
  'additional-red': '#fb3a2f',
  'additional-sand': '#f6f5ed',
  'additional-teal': '#09ab8b',
  'additional-violet': '#902bd0',
  'additional-yellow': '#ffd600',
}));
