import React from 'react';
import { mount, shallow } from 'enzyme';
import ButtonWithHooks, { ButtonWithHooksProps } from './ButtonWithHooks';

describe('ButtonWithHooks', () => {
  let props: ButtonWithHooksProps;

  beforeEach(() => {
    props = {
      content: 'click me',
      onClick: jest.fn(),
    };
  });

  it('check if useEffect was called', () => {
    // const wrapper = mount(<ButtonWithHooks {...props} />);
    const wrapper = shallow(<ButtonWithHooks {...props} />);
    expect(wrapper.text()).toBe('click me');
  });

  it('calls onClick function when button is clicked', () => {
    const wrapper = shallow(<ButtonWithHooks {...props} />);
    wrapper.simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });
});
