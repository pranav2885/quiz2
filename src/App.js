import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import QuizStart from './Pages/QuizStart/QuizStart';
import QuestionPaper from './Pages/QuestionPaper/QuestionPaper';
import Leaderboard from './Pages/Leaderboard/Leaderboard';
import Uploadpage from './Pages/Uploadpage/Uploadpage';
import Summary from './components/Summary';
import Home from './Pages/Home/Home';
import Hostpage from './Pages/Hostpage/Hostpage';
import Snowflake from './components/Snowflake/Snowflake';
import Dashboard from './Pages/Dashboard/Dashboard'; 
import './App.css'; 

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

const sampleQuizzes = [
  { title: 'Geography Quiz' },
  { title: 'Science Quiz' },
  { title: 'Literature  Quiz' },
];

const App = () => {
  const [page, setPage] = useState('home');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [username, setUsername] = useState('User');
  const [uploadedQuestions, setUploadedQuestions] = useState([]);
  const [showSnowflakes, setShowSnowflakes] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSnowflakes(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const startQuiz = () => {
    setPage('quizStart');
  };

  const beginQuiz = () => {
    setCurrentQuestionIndex(0);
    setPage('quiz');
  };

  const nextQuestion = (selectedOption) => {
    if (currentQuestionIndex < (uploadedQuestions.length ? uploadedQuestions : dummyQuestions).length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setPage('leaderboard');
    }
  };

  const showLeaderboard = () => {
    setPage('leaderboard');
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setPage('home');
  };

  const logout = () => {
    setUsername('');
    setPage('home');
  };

  const selectQuiz = (quiz) => {
    console.log(`Selected quiz: ${quiz.title}`);
    startQuiz();
  };

  const handleUploadedQuestions = (questions) => {
    setUploadedQuestions(questions);
    setPage('home');
  };

  const handleCreateQuiz = () => {
    setPage('upload');
  };

  const goToHostPage = () => {
    setPage('questionPaper'); // Change to navigate to QuestionPaper page
  };

  const goToDashboard = () => {
    setPage('dashboard');
  };

  const snowflakeCount = isMobile ? 50 : 200;
  const snowflakes = showSnowflakes ? Array.from({ length: snowflakeCount }).map((_, index) => (
    <Snowflake key={index} />
  )) : null;

  return (
    <Router>
      <div>
        {snowflakes}
        <Routes>
          <Route path="/" element={
            <Home
              username={username}
              quizzes={sampleQuizzes}
              onQuizSelect={selectQuiz}
              onLogout={logout}
              onShowLeaderboard={showLeaderboard}
              onHostPage={goToHostPage}
              onGoToDashboard={goToDashboard}
            />
          } />
          <Route path="/host" element={
            <Hostpage
              username={username}
              onCreateQuiz={handleCreateQuiz}
              onShowLeaderboard={showLeaderboard}
            />
          } />
          <Route path="/quizStart" element={<QuizStart onStartQuiz={beginQuiz} />} />
          <Route path="/quiz" element={<QuestionPaper />} />
          <Route path="/questionPaper" element={<QuestionPaper />} />
          <Route path="/leaderboard" element={<Leaderboard data={sampleLeaderboard} onRestart={restartQuiz} />} />
          <Route path="/summary" element={<Summary onRestart={restartQuiz} />} />
          <Route path="/upload" element={<Uploadpage onUpload={handleUploadedQuestions} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
