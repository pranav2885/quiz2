// src/components/SignUp.js

import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const SignUp = ({ onSignUp }) => {
  const [username, setUsername] = useState('');

  const handleSignUp = () => {
    if (username) {
      onSignUp(username);
    }
  };

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
        <Typography variant="h4" sx={{ color: 'white', marginBottom: 2 }}>
          Sign Up
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" color="secondary" onClick={handleSignUp}>
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default SignUp;
