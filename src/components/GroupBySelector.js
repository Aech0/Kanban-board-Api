// components/GroupBySelector.js
import React from 'react';

const GroupBySelector = ({ onGroupChange }) => {
  const handleChange = (event) => {
    onGroupChange(event.target.value);
  };

  return (
    <select onChange={handleChange}>
      <option value="status">By Status</option>
      <option value="user">By User</option>
      <option value="priority">By Priority</option>
    </select>
  );
};

export default GroupBySelector;
