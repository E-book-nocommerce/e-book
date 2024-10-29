export interface InputProps {
  label: string;
  placeholder: string;
  required?: boolean;
  type: string;
  className?: string;
}

const Input = ({
  label,
  placeholder,
  required = false,

  className = '',
  type,
  ...rest
}: InputProps) => {
  return (
    <div className="">
      <label className="sr-only">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        {...rest}
        className={`pb-2.5 border-b-solid border-b-[1px] border-[#937DC2] w-full placeholder:text-[#937DC2] ${className}`}
      />
    </div>
  );
};

export default Input;
