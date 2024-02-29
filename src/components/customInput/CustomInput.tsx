import React, { FC, InputHTMLAttributes, CSSProperties, useState } from 'react';
import eyeOpen from '../../assets/eye-open.png';
import eyeClose from '../../assets/eye-close.png';
import { inputStyle, placeholderStyle, imgStyle } from './customInputStyles';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    required?: boolean;
    placeholder?: string;
    type?: string;
    onChangeValue?: (value: string) => void;
}

const CustomInput: FC<CustomInputProps> = ({ required, placeholder, type, onChangeValue, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const isValidInput = inputValue.length > 0;
    setIsValid(isValidInput);

    if (onChangeValue) {
      onChangeValue(inputValue);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = showPassword ? 'text' : type || 'text';

  return (
    <div style={{ position: 'relative' }}>
      <input
        required={required}
        placeholder={placeholder}
        type={inputType}
        style={{ ...inputStyle, border: `1px solid ${isFocused || isValid ? '#2EAFB2' : '#0000001A' }` }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        {...rest}
      />
      {type === 'password' && (
        <div>
          <img
            src={showPassword ? eyeOpen : eyeClose}
            style={{ ...imgStyle }}
            alt={showPassword ? 'Esconder senha' : 'Mostrar senha'}
            onClick={toggleShowPassword}
          />
        </div>
      )}
      <style>
        {`
          input::placeholder {
            ${Object.entries(placeholderStyle)
              .map(([key, value]) => `${key}: ${value};`)
              .join(' ')}
          }
        `}
      </style>
    </div>
  );
};

export default CustomInput;
