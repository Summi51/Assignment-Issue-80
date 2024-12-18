// src/data/dummyData.js
export const dummyData = [
    {
      id: 1,
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_1?rel=0&autohide=1&showinfo=0&controls=0',
      assessment: {
        type: 'mcq',
        question: 'What is React?',
        options: ['A library', 'A framework', 'A language'],
        answer: 'A library',
      }
    },
    {
      id: 2,
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_2?rel=0&autohide=1&showinfo=0&controls=0',
      assessment: {
        type: 'short-answer',
        question: 'Explain the concept of JSX.',
        answer: 'A syntax extension for JavaScript.',
      }
    }
  ];
  