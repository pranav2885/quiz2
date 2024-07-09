// src/components/Summary.js

import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const Summary = ({ onRestart }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#87CEEB', // Light blue background
      }}
    >
      <Box
        sx={{
          backgroundColor: '#1A1A2E', // Dark background for the container
          padding: 4,
          borderRadius: 2,
          textAlign: 'center',
          width: '400px', // Fixed width
        }}
      >
        <Typography variant="h4" sx={{ color: 'white', marginBottom: 2 }}>
          Summary
        </Typography>
        {/* Add summary content here */}
        <Typography sx={{ color: 'white', marginBottom: 2 }}>
          Congratulations on completing the quiz!
        </Typography>
        <Typography sx={{ color: 'white', marginBottom: 2 }}>
          Your score: 80/100
        </Typography>
        <Typography sx={{ color: 'white', marginBottom: 2 }}>
          You answered 4 out of 5 questions correctly.
        </Typography>
        <Button variant="contained" color="secondary" onClick={onRestart}>
          Restart Quiz
        </Button>
      </Box>
    </Box>
  );
};

export default Summary;
