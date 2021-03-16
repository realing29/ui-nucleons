import React from 'react';
import { MobileLayout } from '../layout';
import classnames from 'classnames/bind';
import styles from './touch-slider.scss';

export interface Props {
  children?: React.ReactNode
}

const cx = classnames.bind(styles);

/**
 * Компонент блока, прокручиваемого по горизонтали. Реализует отступы MobileLayout.
 * @param props Свойства.
 * @param props.children Прокручиваемое содержимое.
 * @return Компонент блока, прокручиваемого по горизонтали.
 */
const TouchSlider: React.FC<Props> = ({ children }) => (
  <MobileLayout>
    <div className={cx('outer', 'invisible-scroll')}>
      <div className={cx('inner')}>
        {children}
      </div>
    </div>
  </MobileLayout>
);

export default TouchSlider;
