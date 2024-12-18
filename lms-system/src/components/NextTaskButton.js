// src/components/NextTaskButton.js
import React from 'react';

const NextTaskButton = ({ onClick }) => {
  return (
    <button className="next-task-button" onClick={onClick}>
      Next Task
    </button>
  );
};

export default NextTaskButton;
