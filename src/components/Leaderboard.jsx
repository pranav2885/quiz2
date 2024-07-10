import React from 'react';
import { Box, Button, Typography, List, ListItem, ListItemText } from '@mui/material';

const Leaderboard = ({ data, onRestart }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(to top, #00008B, #87CEEB)',
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
          Leaderboard
        </Typography>
        <List>
          {data.map((entry, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${entry.name}: ${entry.score}`} sx={{ color: '#fff' }} />
            </ListItem>
          ))}
        </List>
        <Button variant="contained" color="primary" onClick={onRestart} sx={{ marginTop: 4 }}>
          Restart Quiz
        </Button>
      </Box>
    </Box>
  );
};

export default Leaderboard;
