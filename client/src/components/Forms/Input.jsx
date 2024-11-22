import React, { useState } from 'react';

const Input = ({
  id,
  type = 'text',
  label,
  value,
  onChange,
  className = '',
  inputClassName = '',
  labelClassName = '',
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className={`relative ${className}`}>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`
          w-full
          px-4
          py-3
          text-gray-700
          border
          border-gray-200
          rounded-lg
          bg-transparent
          focus:outline-none
          focus:border-blue-500
          peer
          ${inputClassName}
        `}
      />
      <label
        htmlFor={id}
        className={`
          absolute 
          left-4
          text-gray-500
          transition-all 
          duration-200
          ${
            (isFocused || value)
              ? '-translate-y-4 text-xs'
              : 'translate-y-2 text-base'
          }
          peer-focus:-translate-y-4
          peer-focus:text-xs
          peer-focus:text-blue-500
          ${labelClassName}
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;