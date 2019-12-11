import React from 'react';
import { mount } from 'enzyme';
import NavButton from '../nav-button';

describe('<NavButton />', () => {
  it('should render without props', () => {
    const wrapper = mount(
      <NavButton />
    );
    expect(wrapper.find('button')).toHaveLength(1);
  });
  it('should handle "onClick" prop', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <NavButton
        onClick={spy}
      />
    );
    expect(wrapper.find('button').prop('onClick')).toBe(spy);
  });
  it('should handle "disabled" prop', () => {
    const wrapper = mount(
      <NavButton
        disabled={false}
      />
    );
    expect(wrapper.find('button').prop('disabled')).toBe(false);

    wrapper.setProps({ disabled: true });
    expect(wrapper.find('button').prop('disabled')).toBe(true);

    wrapper.setProps({ disabled: undefined });
    expect(wrapper.find('button').prop('disabled')).toBe(undefined);
  });

  it('should handle "vertical" and "type" props', () => {
    const wrapper = mount(
      <NavButton
        type='forward'
        vertical={false}
      />
    );
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ type: 'backward', vertical: false });
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ type: 'forward', vertical: true });
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ type: 'backward', vertical: true });
    expect(wrapper).toMatchSnapshot();
  });
});
