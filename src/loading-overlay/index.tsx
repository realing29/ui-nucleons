import React from 'react';
import { Spinner, SpinnerProps } from '../spinner';
import classnames from 'classnames/bind';
import classes from './loading-overlay.module.scss';

export interface LoadingOverlayProps {
  /** Пользовательский CSS-класс корневого элемента. */
  className?: string;

  /** Нужно ли заполнять родительский элемент с помощью `position: absolute`. */
  fill?: boolean;

  /** Свойства компонента Spinner. */
  spinnerProps?: SpinnerProps;

  /** Пользовательские стили. */
  style?: React.CSSProperties;
}

const cx = classnames.bind(classes);

/**
 * Компонент перекрытия для отображения состояния загрузки.
 * @deprecated Следует использовать Spinner напрямую.
 * @param props Свойства.
 * @return Элемент.
 */
export const LoadingOverlay = ({
  style,
  className,
  spinnerProps = {},
  fill = true,
}: LoadingOverlayProps) => (
  <div className={cx('loading-overlay', fill && 'fill', className)} style={style}>
    <Spinner {...spinnerProps} />
  </div>
);
