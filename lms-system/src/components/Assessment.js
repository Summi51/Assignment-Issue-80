// src/components/Assessment.js
import React, { useState } from 'react';

const Assessment = ({ assessment, onAnswerSubmit }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmit = () => {
    const isValid = assessment.type === 'mcq' ? assessment.answer === userAnswer : assessment.answer.toLowerCase() === userAnswer.toLowerCase();
    setIsCorrect(isValid);
    onAnswerSubmit(isValid);
  };

  return (
    <div className="assessment">
      <p>{assessment.question}</p>
      {assessment.type === 'mcq' ? (
        assessment.options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              name="mcq"
              value={option}
              onChange={handleAnswerChange}
            />
            {option}
          </div>
        ))
      ) : (
        <input
          type="text"
          value={userAnswer}
          onChange={handleAnswerChange}
          placeholder="Enter your answer"
        />
      )}
      <button onClick={handleSubmit}>Submit</button>
      {isCorrect !== null && (
        <div>{isCorrect ? 'Correct!' : 'Incorrect, please try again.'}</div>
      )}
    </div>
  );
};

export default Assessment;
