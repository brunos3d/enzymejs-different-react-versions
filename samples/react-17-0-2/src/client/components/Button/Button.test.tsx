import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button component', () => {
  it('renders the button', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button').length).toBe(1);
  });

  it('renders default content on the button', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.text()).toBe('click me');
  });

  it('renders exact content on the button', () => {
    const wrapper = shallow(<Button content="foo bar" />);
    expect(wrapper.text()).toBe('foo bar');
  });

  it('executes callback on button click', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<Button onClick={mockCallBack} />);
    wrapper.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
