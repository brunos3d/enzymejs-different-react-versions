import React from 'react';

export interface ButtonProps {
  content?: string;
  onClick?: () => void;
}

export const Button = ({ content, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{content || 'click me'}</button>;
};

export default Button;
