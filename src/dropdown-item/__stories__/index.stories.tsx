import React, { CSSProperties, useState } from 'react';
import { DropdownItem, DropdownItemProps, DropdownItemSize } from '..';
import PlaceholderSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/placeholder';
import { Sandbox } from '../../../.storybook/utils';

export default {
  title: 'common/DropdownItem',
  component: DropdownItem,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const longText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ';

  const style: CSSProperties = {
    maxWidth: '400px',
  };

  return (
    <DropdownItem size='xl' style={style} endContent='Текст' comment={longText}>
      {longText}
    </DropdownItem>
  );
}

Primary.storyName = 'Простой пример';
Primary.parameters = {
  backgrounds: { default: 'custom:gray' },
};

export function DifferentStates() {
  const [size, setSize] = useState<DropdownItemSize>('s');
  const [state, setState] = useState<'default' | 'selected' | 'disabled'>('default');
  const [noHover, setNoHover] = useState<boolean>(false);
  const [startContent, setStartContent] = useState<boolean>(false);
  const [endContent, setEndContent] = useState<boolean>(false);
  const [comment, setComment] = useState<boolean>(true);

  const longText =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quia labore nam fugit libero tempore aliquam.';

  const props: DropdownItemProps = {
    size,
    disabled: state === 'disabled',
    selected: state === 'selected',
    noHover,
    comment: comment ? longText : null,
    startIcon: startContent ? PlaceholderSVG : undefined,
    endContent: endContent ? 'Текст' : null,
  };

  return (
    <Sandbox
      controls={[
        {
          type: 'select',
          label: 'Размер',
          bind: [size, setSize],
          options: ['s', 'm', 'l', 'xl'],
        },
        {
          type: 'select',
          label: 'Состояние',
          bind: [state, setState],
          options: ['default', 'selected', 'disabled'],
        },
        {
          type: 'toggle',
          label: 'Отключить эффект при наведении',
          bind: [noHover, setNoHover],
        },
        {
          type: 'toggle',
          label: 'С иконкой в начале',
          bind: [startContent, setStartContent],
        },
        {
          type: 'toggle',
          label: 'С текстом в конце',
          bind: [endContent, setEndContent],
        },
        {
          type: 'toggle',
          label: 'С комментарием',
          bind: [comment, setComment],
          hidden: size !== 'xl',
        },
      ]}
      areaStyle={{
        background: '#ccc',
        borderColor: '#ccc',
      }}
    >
      <DropdownItem {...props}>{longText}</DropdownItem>
    </Sandbox>
  );
}

DifferentStates.storyName = 'Различные состояния';
