import React from 'react';
import { shallow } from 'enzyme';
import ButtonWithHooks from './ButtonWithHooks';

describe('ButtonWithHooks', () => {
  let props;

  beforeEach(() => {
    props = {
      content: 'click me',
      onClick: jest.fn(),
    };
  });

  it('render without crashing', () => {
    const wrapper = shallow(<ButtonWithHooks {...props} />);
    expect(wrapper.text()).toBe('click me');
  });

  it('calls onClick function when button is clicked', () => {
    const wrapper = shallow(<ButtonWithHooks {...props} />);
    wrapper.simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });
});
