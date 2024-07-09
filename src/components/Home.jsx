// src/components/Home.js

import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const Home = ({ username, quizzes, onQuizSelect, onLogout }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        backgroundColor: '#f0f0f0',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 4 }}>
        Hi, {username}
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Live Quizzes
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '800px',
        }}
      >
        {quizzes.map((quiz, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: '#1A1A2E',
              borderRadius: 2,
              padding: 2,
              marginBottom: 2,
              width: '100%',
              textAlign: 'center',
            }}
          >
            <Typography sx={{ color: 'white', marginBottom: 1 }}>{quiz.title}</Typography>
            <Button variant="contained" color="secondary" onClick={() => onQuizSelect(quiz)}>
              Start Quiz
            </Button>
          </Box>
        ))}
      </Box>
      <Button variant="contained" color="secondary" onClick={onLogout} sx={{ marginTop: 4 }}>
        Logout
      </Button>
    </Box>
  );
};

export default Home;
