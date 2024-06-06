import React from 'react';

const DatePicker = ({ value, onChange }) => {
  return (
    <input 
      type="date" 
      value={value} 
      onChange={onChange} 
    />
  );
};

export default DatePicker;
