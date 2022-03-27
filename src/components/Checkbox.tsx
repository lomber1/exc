import React, { useCallback } from 'react';
import clsx from 'clsx';
import { MdCheck } from 'react-icons/md';

export interface CheckboxProps {
  checked: boolean;
  onCheck?: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onCheck }) => {
  const handleClick = useCallback(() => {
    if (onCheck) {
      onCheck();
    }
  }, [onCheck]);

  return (
    <div
      className={clsx(
        'inline-flex border-2 w-5 h-5 cursor-pointer',
        checked && 'border-primary',
      )}
      onClick={handleClick}
    >
      <MdCheck
        className={clsx(
          'text-primary text-md',
          checked && 'opacity-1',
          !checked && 'opacity-0',
        )}
      />
    </div>
  );
};

export default Checkbox;
