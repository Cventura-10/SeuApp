import React from 'react';
import './Input.css';
import { primaryColor, secondaryColor } from '../../styles/colors';

const Input = ({ ...rest }) => {
  return (
    <input
      style={{
        backgroundColor: '#FFFFFF',
        color: primaryColor,
        borderRadius: '4px',
        padding: '8px 16px',
        fontWeight: 400,
        border: `1px solid ${secondaryColor}`,
        outline: 'none',
      }}
      {...rest}
    />
  );
};

export default Input;
