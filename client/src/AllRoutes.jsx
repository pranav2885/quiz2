import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import QuizStart from './Pages/QuizStart/QuizStart';
import QuestionPaper from './Pages/QuestionPaper/QuestionPaper';
import Leaderboard from './Pages/Leaderboard/Leaderboard';
import Uploadpage from './Pages/Uploadpage/Uploadpage';
import Summary from './components/Summary';
import Home from './Pages/Home/Home';
import Hostpage from './Pages/Hostpage/Hostpage';
import Dashboard from './Pages/Dashboard/Dashboard';

export default function AllRoutes({
  username,
  sampleQuizzes,
  selectQuiz,
  logout,
  showLeaderboard,
  goToHostPage,
  goToDashboard,
  handleCreateQuiz,
  beginQuiz,
  sampleLeaderboard,
  restartQuiz,
  handleUploadedQuestions,
  snowflakes
}) {
  return (
    <Router>
      <div>
        {snowflakes}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                username={username}
                quizzes={sampleQuizzes}
                onQuizSelect={selectQuiz}
                onLogout={logout}
                onShowLeaderboard={showLeaderboard}
                onHostPage={goToHostPage}
                onGoToDashboard={goToDashboard}
              />
            }
          />
          <Route
            path="/host"
            element={
              <Hostpage
                username={username}
                onCreateQuiz={handleCreateQuiz}
                onShowLeaderboard={showLeaderboard}
              />
            }
          />
          <Route path="/quizStart" element={<QuizStart onStartQuiz={beginQuiz} />} />
          <Route path="/quiz" element={<QuestionPaper />} />
          <Route path="/questionPaper" element={<QuestionPaper />} />
          <Route
            path="/leaderboard"
            element={<Leaderboard data={sampleLeaderboard} onRestart={restartQuiz} />}
          />
          <Route path="/summary" element={<Summary onRestart={restartQuiz} />} />
          <Route path="/upload" element={<Uploadpage onUpload={handleUploadedQuestions} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}
