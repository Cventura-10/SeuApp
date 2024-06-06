import React from 'react';
import './Dropdown.css';
import { primaryColor, secondaryColor, textColor } from '../../styles/colors';

const Dropdown = ({ options, ...rest }) => {
  return (
    <select
      style={{
        backgroundColor: primaryColor,
        color: textColor,
        borderRadius: '4px',
        padding: '8px 16px',
        fontWeight: 400,
        border: 'none',
        cursor: 'pointer',
      }}
      {...rest}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
