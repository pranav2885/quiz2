// src/components/Login.js

import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Link } from '@mui/material';

const Login = ({ onLogin, onSignUpClick, onForgotPasswordClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      onLogin(email);
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
        backgroundColor: '#ADD8E6', // Light blue background color
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
          Login
        </Typography>
        <TextField
          label="Email Address"
          type="email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            marginBottom: 2,
            backgroundColor: '#ADD8E6', // Light blue background color
            borderRadius: '4px', // Border radius for rounded corners
          }}
          InputProps={{
            style: {
              borderRadius: '4px',
            },
          }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            marginBottom: 2,
            backgroundColor: '#ADD8E6', // Light blue background color
            borderRadius: '4px', // Border radius for rounded corners
          }}
          InputProps={{
            style: {
              borderRadius: '4px',
            },
          }}
        />
        <Button variant="contained" color="secondary" onClick={handleLogin}>
          Login
        </Button>
        <Box sx={{ marginTop: 2 }}>
          <Link
            component="button"
            variant="body2"
            sx={{ color: 'white', marginRight: 2 }}
            onClick={onForgotPasswordClick}
          >
            Forgot Password
          </Link>
          <Link
            component="button"
            variant="body2"
            sx={{ color: 'white' }}
            onClick={onSignUpClick}
          >
            Sign Up
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
