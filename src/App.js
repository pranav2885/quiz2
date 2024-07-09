// src/App.js

import React, { useState } from 'react';
import QuizStart from './components/QuizStart';
import QuizQuestion from './components/QuizQuestion';
import Leaderboard from './components/Leaderboard';
import Summary from './components/Summary';

const dummyQuestions = [
  {
    question: "Which of the following is the major element in the earth's crust?",
    options: ['Silicon', 'Oxygen', 'Iron', 'Aluminum'],
  },
  {
    question: "What is the capital of France?",
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ['Mars', 'Earth', 'Jupiter', 'Saturn'],
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ['Harper Lee', 'Jane Austen', 'Mark Twain', 'Ernest Hemingway'],
  },
];

const sampleLeaderboard = [
  { name: 'Alice', score: 100 },
  { name: 'Bob', score: 90 },
  { name: 'Charlie', score: 80 },
];

const App = () => {
  const [page, setPage] = useState('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const startQuiz = () => {
    setPage('quiz');
  };

  const nextQuestion = (selectedOption) => {
    if (currentQuestionIndex < dummyQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setPage('summary');
    }
  };

  const showLeaderboard = () => {
    setPage('leaderboard');
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setPage('start');
  };

  return (
    <div>
      {page === 'start' && <QuizStart onStart={startQuiz} />}
      {page === 'quiz' && (
        <QuizQuestion
          question={dummyQuestions[currentQuestionIndex].question}
          options={dummyQuestions[currentQuestionIndex].options}
          onNext={nextQuestion}
        />
      )}
      {page === 'leaderboard' && <Leaderboard data={sampleLeaderboard} onRestart={restartQuiz} />}
      {page === 'summary' && <Summary onRestart={restartQuiz} />}
    </div>
  );
};

export default App;
