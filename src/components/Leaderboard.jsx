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
          Leaderboard
        </Typography>
        <List>
          {data.map((entry, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${entry.name}: ${entry.score}`} />
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
