import React, { useCallback, useEffect, useState } from 'react';

export interface ButtonWithHooksProps {
  content?: string;
  onClick?: () => void;
}

export const ButtonWithHooks = ({ content, onClick }: ButtonWithHooksProps) => {
  const [text, setText] = useState(content || 'click me');

  useEffect(() => {
    if (text.indexOf('(initializated)') !== -1) return;
    setText(value => `(initializated) ${value}`);
  }, [text]);

  const handleClick = useCallback(() => {
    if (onClick) onClick();
  }, [onClick]);

  return <button onClick={handleClick}>{text}</button>;
};

export default ButtonWithHooks;
