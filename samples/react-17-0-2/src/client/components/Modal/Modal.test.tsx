import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';

describe('Modal', () => {
  const title = 'Test Modal';
  const content = 'Modal content';
  const onClose = jest.fn();

  it('renders the modal with the correct props', () => {
    const wrapper = shallow(
      <Modal title={title} content={content} onClose={onClose} visible={true} />,
    );
    expect(wrapper.find('ModalContainer').prop('visible')).toBe(true);
    expect(wrapper.find('ModalTitle').text()).toBe(title);
    expect(wrapper.find('ModalContent').text()).toBe(content);
  });

  it('calls the onClose function when the close button is clicked', () => {
    const wrapper = shallow(
      <Modal title={title} content={content} onClose={onClose} visible={true} />,
    );
    wrapper.find('ModalCloseButton').simulate('click');
    expect(onClose).toHaveBeenCalled();
  });

  it('hides the modal when the visible prop is false', () => {
    const wrapper = shallow(
      <Modal title={title} content={content} onClose={onClose} visible={false} />,
    );
    expect(wrapper.find('ModalContainer').prop('visible')).toBe(false);
  });
});
