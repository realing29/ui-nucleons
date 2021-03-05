import React, { useState } from 'react';
import { Stepper } from '..';

export default {
  title: 'Stepper',
  component: Stepper,
  parameters: {
    layout: 'padded',
  },
};

const Template = props => {
  const [value, setValue] = useState('');
  const [withControls, toggleControls] = useState(false);
  const amount = parseInt(value || '0');

  return (
    <>
      <Stepper
        {...props}
        value={value}
        onChange={e => setValue(e.target.value.replace(/\D/g, ''))}
        onAdd={() => setValue(Math.min(10, amount + 1))}
        onSubtract={() => setValue(Math.max(0, amount - 1))}
        canAdd={withControls && amount < 10}
        canSubtract={withControls && amount > 0}
        onBlur={e => {
          setValue(Math.min(10, Math.max(0, parseInt(e.target.value || '0'))));
          toggleControls(Boolean(e.target.value));
        }}
      />
      <br />

      <h4>Disabled</h4>
      <Stepper {...props} value={value} disabled />
    </>
  );
};

export const Primary = Template.bind(null, { size: 'm' });

export const SmallSize = Template.bind(null, { size: 's' });
