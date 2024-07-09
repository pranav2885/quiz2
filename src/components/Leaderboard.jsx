// src/components/Leaderboard.js

import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const Leaderboard = ({ data, onRestart }) => {
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
          Leaderboard
        </Typography>
        {data.map((item, index) => (
          <Typography key={index} sx={{ color: 'white', marginBottom: 1 }}>
            {item.name}: {item.score}
          </Typography>
        ))}
        <Button variant="contained" color="secondary" onClick={onRestart}>
          Restart Quiz
        </Button>
      </Box>
    </Box>
  );
};

export default Leaderboard;
