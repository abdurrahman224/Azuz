import { useState } from "react";

const InputField = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  checked,
  className = "",
  inputClassName = "",
  required = false,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  // If type is checkbox, render custom checkbox
  if (type === "checkbox") {
    return (
      <div className={`relative flex items-center ${className}`}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => {
            setIsChecked(e.target.checked);
            if (onChange) onChange(e);
          }}
          className={`peer appearance-none w-5 h-5 text-base border border-white rounded-full checked:bg-[#003d1c] cursor-pointer transition-all ${inputClassName}`}
          required={required}
          {...props}
        />
        <div className="absolute w-3 h-3 bg-white rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden peer-checked:block pointer-events-none"></div>
      </div>
    );
  }

  // Default input (text/email/password/etc)
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`w-full border border-white bg-transparent p-2.5 outline-none placeholder-white text-lg ${className}`}
      {...props}
    />
  );
};

export default InputField;
