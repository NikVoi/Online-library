import React from 'react'

const Select = ({onChange, options }) => {
  return (
    <select onChange={onChange}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
