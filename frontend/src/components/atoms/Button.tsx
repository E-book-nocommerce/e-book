import React, { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  type: 'submit' | 'reset' | 'button' | undefined;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  onClick,
  className = '',
  disabled = false,
}) => {
  return (
    <button
      className={` py-2.5 bg-[#937DC2] rounded-sm ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
