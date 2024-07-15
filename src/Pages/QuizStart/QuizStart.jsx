import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const QuizStart = ({ onStartQuiz }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(to top, #508c9f, #508c9f)',
        color: '#fff',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          padding: 4,
          borderRadius: 2,
          textAlign: 'center',
          width: '100%',
          maxWidth: '400px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: 4 }}>
          Ready to Start the Quiz?
        </Typography>
        <Button variant="contained" color="secondary" onClick={onStartQuiz}>
          Start Quiz
        </Button>
      </Box>
    </Box>
  );
};

export default QuizStart;
