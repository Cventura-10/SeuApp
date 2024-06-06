import React from 'react';
import './Button.css';
import { primaryColor, textColor } from '../../styles/colors';

const Button = ({ children, ...rest }) => {
  return (
    <button
      style={{
        backgroundColor: primaryColor,
        color: textColor,
        borderRadius: '4px',
        padding: '8px 16px',
        fontWeight: 700,
        border: 'none',
        cursor: 'pointer',
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
