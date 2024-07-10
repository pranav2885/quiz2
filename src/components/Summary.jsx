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
          Quiz Summary
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 4 }}>
          Thank you for participating in the quiz!
        </Typography>
        <Button variant="contained" color="primary" onClick={onRestart} sx={{ marginTop: 4 }}>
          Restart Quiz
        </Button>
      </Box>
    </Box>
  );
};

export default Summary;
