export type BottomBarSize = 's' | 'm' | 'l';

export interface BottomBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  /** Размер (высота). */
  size?: BottomBarSize | 'unset';

  /** Нужна ли разделительная черта сверху. */
  divided?: boolean;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}
