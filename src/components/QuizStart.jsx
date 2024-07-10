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
        backgroundColor: '#f0f0f0',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#1A1A2E',
          padding: 4,
          borderRadius: 2,
          textAlign: 'center',
          width: '400px',
        }}
      >
        <Typography variant="h4" sx={{ color: 'white', marginBottom: 4 }}>
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
