import React from 'react';
import { Box, Typography, Button, AppBar, Toolbar, Container } from '@mui/material';

const Hostpage = ({ username, onCreateQuiz, onShowLeaderboard }) => {
  return (
    <Box
      sx={{
        maxWidth: '100%',
        fontFamily: 'Roboto, sans-serif',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(to top, #00008B, #87CEEB)',
        color: '#fff',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '200%',
          height: '200%',
          background: 'linear-gradient(45deg, rgba(0, 0, 50, 0.8), rgba(0, 0, 150, 0.8))',
          zIndex: -1,
          animation: 'moveBackground 20s linear infinite',
        },
        '@keyframes moveBackground': {
          '0%': { transform: 'translate(-50%, -50%)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: '#000' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
            Quiz Host
          </Typography>
        </Toolbar>
      </AppBar>
      <Container
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: { xs: 2, sm: 4 },
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: 4, textAlign: 'center' }}>
          Welcome, {username}!
        </Typography>
        <Button variant="contained" color="primary" onClick={onCreateQuiz} sx={{ marginBottom: 2 }}>
          Create Quiz
        </Button>
        <Button variant="contained" color="primary" onClick={onShowLeaderboard} sx={{ marginBottom: 2 }}>
          Leaderboard
        </Button>
        <Button variant="contained" color="primary" href="https://www.example.com/dashboard" target="_blank">
          Dashboard
        </Button>
      </Container>
    </Box>
  );
};

export default Hostpage;
