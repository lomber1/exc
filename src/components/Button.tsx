import React, { useCallback } from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  variant?: 'contained' | 'outlined';
}

const Button: React.FC<ButtonProps> = ({
  children, onClick, variant = 'contained', ...other
}) => {
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  return (
    <button
      className={clsx(
        'flex flex-row px-4 py-2 rounded box-border',
        variant === 'contained' && 'border-none bg-yellow-300',
        variant === 'outlined' && 'border-2 border-yellow-300',
      )}
      onClick={handleClick}
      type="button"
      {...other}
    >
      {children}
    </button>
  );
};

export default Button;
