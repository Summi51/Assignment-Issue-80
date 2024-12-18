// src/App.js
import React, { useState } from 'react';
import { dummyData } from './data/dummyData';
import VideoPlayer from './components/VideoPlayer';
import Assessment from './components/Assessment';
import NextTaskButton from './components/NextTaskButton';
import './styles/App.css';

const App = () => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [assessmentCompleted, setAssessmentCompleted] = useState(false);

  const handleVideoEnd = () => {
    setAssessmentCompleted(true);
  };

  const handleAnswerSubmit = (isCorrect) => {
    if (isCorrect) {
      setAssessmentCompleted(true);
    }
  };

  const handleNextTask = () => {
    if (assessmentCompleted) {
      setAssessmentCompleted(false);
      setCurrentTaskIndex(currentTaskIndex + 1);
    }
  };

  const currentTask = dummyData[currentTaskIndex];

  return (
    <div className="lms-container">
      {currentTask ? (
        <>
          <VideoPlayer videoUrl={currentTask.videoUrl} onVideoEnd={handleVideoEnd} />
          {assessmentCompleted && (
            <Assessment assessment={currentTask.assessment} onAnswerSubmit={handleAnswerSubmit} />
          )}
          {assessmentCompleted && <NextTaskButton onClick={handleNextTask} />}
        </>
      ) : (
        <p>No lessons available. Please check back later.</p>
      )}
    </div>
  );
};

export default App;
