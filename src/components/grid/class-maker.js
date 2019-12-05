import styles from './grid.scss';
import classNames from 'classnames';
import { COLUMNS_COUNTS, COLUMNS_GUTTERS } from './grid-row';

/**
 * Является ли корректным значение количества колонок.
 * @param {number} value Переданное значение.
 * @return {boolean} Корректно ли значение.
 */
const isCorrectColumns = value => COLUMNS_COUNTS.includes(value);

/**
 * Является ли корректным значение отступа между колонками.
 * @param {string} value Переданное значение.
 * @return {boolean} Корректно ли значение.
 */
const isCorrectGutters = value => COLUMNS_GUTTERS.includes(value);

/**
 * Функция создания классов контейнера сетки.
 * @param {Object} props Входные параметры.
 * @param {string} [props.externalClass] Пользовательский класс.
 * @param {'start'|'end'|'center'|'around'|'between'} [props.justify='start'] Горизонтальное выравнивание.
 * @param {'start'|'end'|'center'|'around'|'between'|'stretch'} [props.alignItems='stretch']
 * Выравнивание по вертикальной оси.
 * @param {boolean} [props.wrap=false] Разрешить перенос контента внутри контейнера на новую строку.
 * @param {boolean} [props.withoutGutters=false] Без отступов между колонками.
 * @param {number} [props.lgColumns=12] Количество колонок в строке при экране > 960px.
 * @param {number} [props.mdColumns=8] Количество колонок в строке при экране <= 960px.
 * @param {'lg'|'md'|'sm'} [props.lgGutters='lg'] Размер отступов между столбцами при экране > 960px.
 * @param {'lg'|'md'|'sm'} [props.mdGutters='md'] Размер отступов между столбцами при экране 721-960px.
 * @param {'lg'|'md'|'sm'} [props.smGutters='sm'] Размер отступов между столбцами при экране <= 720px.
 * @return {string} Классы контейнера сетки.
 */
export const makeRowClasses = ({
  externalClass,
  justify = 'start',
  alignItems = 'stretch',
  wrap = false,
  withoutGutters = false,
  lgColumns = 12,
  mdColumns = 8,
  lgGutters = 'lg',
  mdGutters = 'md',
  smGutters = 'sm',
}) =>
  classNames(
    styles.row,
    wrap ? styles.wrap : '',
    styles[`items-${alignItems}`],
    styles[`justify-${justify}`],
    withoutGutters ? '' : styles['with-gutters'],
    isCorrectColumns(lgColumns) && styles[`row-lg-columns-count-${lgColumns}`],
    isCorrectColumns(mdColumns) && styles[`row-md-columns-count-${mdColumns}`],
    isCorrectGutters(lgGutters) && styles[`row-lg-columns-gutters-${lgGutters}`],
    isCorrectGutters(mdGutters) && styles[`row-md-columns-gutters-${mdGutters}`],
    isCorrectGutters(smGutters) && styles[`row-sm-columns-gutters-${smGutters}`],
    externalClass,
  );

/**
 * Функция создания классов колонки сетки.
 * @param {Object} props Входные параметры.
 * @param {string} [props.externalClass] Пользовательский класс.
 * @param {'auto'|number} [props.desktop='auto'] Ширину скольких колонок должна занять колонка на десктопной версии.
 * @param {'auto'|number} [props.mobile='auto'] Ширину скольких колонок должна занять колонка в мобильной версии.
 * @return {string} Классы колонки сетки.
 */
export const makeColClasses = ({
  externalClass,
  desktop = 'auto',
  mobile = 'auto',
}) =>
  classNames(
    styles.col,
    styles[`col-lg-width-${desktop}`],
    styles[`col-md-width-${mobile}`],
    externalClass,
  );
