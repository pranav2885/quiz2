import React, { useState, useEffect } from 'react';
import Snowflake from './components/Snowflake/Snowflake';
import AllRoutes from './AllRoutes';
import { dummyQuestions } from './constants/dummyQuestions';
import { sampleLeaderBoard } from './constants/sampleLeaderBoard';
import { sampleQuizzes } from './constants/sampleQuizzes';
import './App.css';

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
    <div>
      <AllRoutes
        username={username}
        sampleQuizzes={sampleQuizzes}
        selectQuiz={selectQuiz}
        logout={logout}
        showLeaderboard={showLeaderboard}
        goToHostPage={goToHostPage}
        goToDashboard={goToDashboard}
        handleCreateQuiz={handleCreateQuiz}
        beginQuiz={beginQuiz}
        sampleLeaderboard={sampleLeaderBoard}
        restartQuiz={restartQuiz}
        handleUploadedQuestions={handleUploadedQuestions}
        snowflakes={snowflakes}
      />
    </div>
  );
};

export default App;
