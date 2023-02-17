import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModalContainer = styled.div<{ visible: boolean }>`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: all 0.3s;
`;

ModalContainer.displayName = 'ModalContainer'; // This is needed for the test to pass

const ModalBox = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
`;

ModalBox.displayName = 'ModalBox';

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;

ModalHeader.displayName = 'ModalHeader';

const ModalTitle = styled.h2`
  margin: 0;
`;

ModalTitle.displayName = 'ModalTitle';

const ModalCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

ModalCloseButton.displayName = 'ModalCloseButton';

const ModalContent = styled.div`
  padding: 1rem;
`;

ModalContent.displayName = 'ModalContent';

export interface ModalProps {
  title: string;
  content: React.ReactNode;
  onClose: () => void;
  visible: boolean;
}

const Modal = ({ title, content, onClose, visible }: ModalProps) => {
  return (
    <ModalContainer visible={visible}>
      <ModalBox>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalCloseButton aria-label="Close" onClick={onClose}>
            &times;
          </ModalCloseButton>
        </ModalHeader>
        <ModalContent>{content}</ModalContent>
      </ModalBox>
    </ModalContainer>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Modal;
