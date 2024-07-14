import React, { useState, useEffect } from 'react';
import QuizStart from './Pages/QuizStart/QuizStart';
import QuestionPaper from './Pages/QuestionPaper/QuestionPaper';
import Leaderboard from './Pages/Leaderboard/Leaderboard';
import Uploadpage from './Pages/Uploadpage/Uploadpage';
import Summary from './components/Summary';
import Home from './Pages/Home/Home';
import Hostpage from './Pages/Hostpage/Hostpage';
import Snowflake from './Snowflake/Snowflake';
import Dashboard from './Pages/Dashboard/Dashboard'; // Import the Dashboard component
import './App.css'; // Ensure this imports the Snowflake.css as well

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
    // Delay the snowfall by 2-3 seconds
    const timer = setTimeout(() => {
      setShowSnowflakes(true);
    }, 2000); // 2 seconds delay
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

  // Adjust the number of snowflakes based on the screen size
  const snowflakeCount = isMobile ? 50 : 200;
  const snowflakes = showSnowflakes ? Array.from({ length: snowflakeCount }).map((_, index) => (
    <Snowflake key={index} />
  )) : null;

  return (
    <div>
      {snowflakes} {/* Render snowflakes */}
      {page === 'home' && (
        <Home 
          username={username} 
          quizzes={sampleQuizzes} 
          onQuizSelect={selectQuiz} 
          onLogout={logout} 
          onShowLeaderboard={showLeaderboard} 
          onHostPage={goToHostPage} // Update to use the new function
          onGoToDashboard={goToDashboard} // Add navigation to Dashboard
        />
      )}
      {page === 'host' && (
        <Hostpage 
          username={username} 
          onCreateQuiz={handleCreateQuiz} 
          onShowLeaderboard={showLeaderboard} 
        />
      )}
      {page === 'quizStart' && (
        <QuizStart 
          onStartQuiz={beginQuiz} 
        />
      )}
      {page === 'quiz' && (
        <QuestionPaper />
      )}
      {page === 'questionPaper' && (
        <QuestionPaper />
      )}
      {page === 'leaderboard' && (
        <Leaderboard 
          data={sampleLeaderboard} 
          onRestart={restartQuiz} 
        />
      )}
      {page === 'summary' && (
        <Summary 
          onRestart={restartQuiz} 
        />
      )}
      {page === 'upload' && (
        <Uploadpage onUpload={handleUploadedQuestions} />
      )}
      {page === 'dashboard' && ( // Add condition to render Dashboard
        <Dashboard />
      )}
    </div>
  );
};

export default App;
