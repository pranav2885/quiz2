// src/components/QuizStart.js

import React from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';

const QuizStart = ({ onStart }) => {
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
          Start the Quiz
        </Typography>
        <Typography sx={{ color: 'white', marginBottom: 2 }}>
          Good luck!
        </Typography>
        {/* <Typography sx={{ color: 'white', marginBottom: 2 }}>
          Time: 60 sec
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
          <TextField
            variant="outlined"
            value="1"
            InputProps={{ readOnly: true }}
            sx={{
              width: 50,
              marginRight: 1,
              '& .MuiOutlinedInput-input': { color: 'white' },
              '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
            }}
          />
          <Typography sx={{ color: 'white', marginRight: 1 }}>min</Typography>
          <TextField
            variant="outlined"
            value="0"
            InputProps={{ readOnly: true }}
            sx={{
              width: 50,
              '& .MuiOutlinedInput-input': { color: 'white' },
              '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
            }}
          />
          <Typography sx={{ color: 'white' }}>sec</Typography>
        </Box> */}
        <Button variant="contained" color="secondary" onClick={onStart}>
          Start
        </Button>
      </Box>
    </Box>
  );
};

export default QuizStart;
