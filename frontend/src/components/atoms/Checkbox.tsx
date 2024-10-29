// src/components/atoms/Checkbox.tsx
import React from 'react';

interface CheckboxProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  className: string;
  id: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  value,
  checked,
  onChange,
  id,
  className = '',
}) => {
  return (
    <div className={`${className}`}>
      <input
        type="checkbox"
        id={id}
        value={value}
        checked={checked}
        className={'focus:bg-purple w-4 h-4'}
        onChange={() => onChange(value)}
      />
      <label className={'pl-2'} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
