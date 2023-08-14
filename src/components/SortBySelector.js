// components/SortBySelector.js
import React from 'react';

const SortBySelector = ({ onSortChange }) => {
  const handleChange = (event) => {
    onSortChange(event.target.value);
  };

  return (
    <select onChange={handleChange}>
      <option value="priority">Priority</option>
      <option value="title">Title</option>
    </select>
  );
};

export default SortBySelector;
