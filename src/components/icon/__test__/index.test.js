import Icon from '../';
import React from 'react';
import { mount } from 'enzyme';
import svgIcon from '../../icons/bus.svg';

describe('<Icon />', () => {
  it('Icon renders correctly with image-cap', () => {
    const clickMock = jest.fn;
    const icon = mount(<Icon color='dark-gray' size={20} className='test' onClick={clickMock}/>);
    expect(icon.find('svg')).toHaveLength(1);
    expect(icon.find('svg').prop('className')).toBe('icon icon-dark-gray icon-block test');
    expect(icon.find('svg').prop('onClick')).toHaveLength(1);
    expect(icon.find('imageCap')).toHaveLength(1);
    expect(icon).toMatchSnapshot();
  });
  it('Icon renders correctly with icon prop', () => {
    const clickMock = jest.fn;
    const icon = mount(<Icon icon={svgIcon} color='dark-gray' className='test' onClick={clickMock}/>);
    expect(icon.find('svgIcon')).toHaveLength(1);
    expect(icon.find('svgIcon').prop('height')).toBe('33');
    expect(icon).toMatchSnapshot();
  });
});
