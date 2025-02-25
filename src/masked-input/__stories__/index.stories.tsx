import React, { useState } from 'react';
import { MaskedInput } from '..';
import { DropdownItem } from '../../dropdown-item';
import { Select } from '../../select';
import { TextButton } from '../../text-button';

export default {
  title: 'common/MaskedInput',
  component: MaskedInput,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const defaultValue = '8005553535';
  const [value, setValue] = useState(defaultValue);

  return (
    <>
      <MaskedInput
        label='Телефон'
        mask='+7 (___) ___-__-__'
        value={value}
        onChange={(event, data) => setValue(data.cleanValue)}
      />

      <p>Значение: {value || '[пусто]'}</p>

      <TextButton size='s' onClick={() => setValue(defaultValue)}>
        Сбросить
      </TextButton>
    </>
  );
}

Primary.storyName = 'Простой пример';

export function NoRestPlaceholder() {
  const defaultValue = '1112223344';
  const [value, setValue] = useState(defaultValue);

  return (
    <>
      <MaskedInput
        label='Телефон'
        mask='+7 (___) ___-__-__'
        baseInputProps={{ restPlaceholder: undefined }}
        value={value}
        onChange={(event, data) => setValue(data.cleanValue)}
      />
    </>
  );
}

NoRestPlaceholder.storyName = 'Без rest placeholder';

Primary.storyName = 'Простой пример';

export function TestUncontrolled() {
  const defaultValue = '4443332211';
  const [value, setValue] = useState(defaultValue);

  return (
    <>
      <MaskedInput
        label='Телефон'
        mask='+7 (___) ___-__-__'
        defaultValue={defaultValue}
        onChange={(event, data) => setValue(data.cleanValue)}
      />

      <p>Значение: {value || '[пусто]'}</p>
    </>
  );
}

TestUncontrolled.storyName = 'Тест: неконтролируемое поле';

export function TestMaskChange() {
  const masks: ReadonlyArray<{ name: string; mask: string }> = [
    {
      name: 'Паспорт',
      mask: '____ ______',
    },
    {
      name: 'Дата',
      mask: '__ / __ / ____',
    },
    {
      name: 'Телефон',
      mask: '+7 (___) ___-__-__',
    },
    {
      name: 'Карта',
      mask: '____ ____ ____ ____',
    },
  ];

  const [value, setValue] = useState('');
  const [mask, setMask] = useState(masks[0]);

  return (
    <>
      <Select
        opener={<Select.TextButton size='s' />}
        value={mask.name}
        onValueChange={maskName => {
          const newMask = masks.find(i => i.name === maskName);

          if (newMask) {
            setMask(newMask);
            setValue(newMask.mask.replace(/[^_]/g, '').replace(/_/g, '0'));
          }
        }}
      >
        {masks.map((item, index) => (
          <DropdownItem key={index} value={item.name}>
            {item.name}
          </DropdownItem>
        ))}
      </Select>

      <MaskedInput
        style={{ marginTop: '12px' }}
        label={mask.name}
        mask={mask.mask}
        value={value}
        onChange={(event, data) => {
          setValue(data.cleanValue);
        }}
      />

      <p>Значение: {value || '[пусто]'}</p>
    </>
  );
}

TestMaskChange.storyName = 'Тест: смена маски';
