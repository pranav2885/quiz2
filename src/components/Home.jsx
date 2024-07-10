import React, { useState } from 'react';
import { Box, Typography, Button, Link, AppBar, Toolbar, Container, Grid, Card, CardContent, IconButton } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ScoreIcon from '@mui/icons-material/Score';

const Home = ({ username, onQuizSelect, onShowLeaderboard }) => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const springProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  const dummyQuizzes = Array.from({ length: 10 }).map((_, index) => ({
    title: `Quiz ${index + 1}`,
    duration: `${30 + index * 5} mins`,
    startDate: `2024-07-${10 + index}`,
    endDate: `2024-07-${15 + index}`,
    totalPoints: 100 + index * 10,
  }));

  return (
    <Box
      sx={{
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
            Quiz App
          </Typography>
          <Button color="inherit" onClick={onShowLeaderboard}>
            Leaderboard
          </Button>
          <Link href="https://www.example.com/dashboard" target="_blank" color="inherit" underline="none">
            <Button color="inherit">Dashboard</Button>
          </Link>
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
          overflow: 'hidden',
          margin: { xs: '10px', sm: '20px' },
          maxWidth: '90%', // Ensure the container is not too wide on large screens
        }}
      >
        <animated.div style={springProps}>
          <Typography variant="h4" sx={{ marginBottom: { xs: 2, sm: 4 }, textAlign: 'center' }}>
            Hi, {username}!
          </Typography>
          <Box
            sx={{
              width: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              padding: { xs: 2, sm: 4 },
              borderRadius: 4,
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              marginBottom: { xs: 2, sm: 4 },
              overflowX: 'auto',
              whiteSpace: 'nowrap',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                zIndex: -1,
                borderRadius: 4,
              },
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              scrollbarWidth: 'none',
            }}
          >
            <Typography variant="h5" sx={{ marginBottom: 2, textAlign: 'center' }}>
              Live Quizzes
            </Typography>
            <Grid container spacing={2} sx={{ paddingBottom: 2 }}>
              {dummyQuizzes.map((quiz, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Card
                    onClick={() => onQuizSelect(quiz)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    sx={{
                      cursor: 'pointer',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      },
                      transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                      transition: 'transform 0.3s, background-color 0.3s',
                      padding: 2,
                      marginBottom: 2,
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                      borderRadius: 4,
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" sx={{ color: '#fff' }}>{quiz.title}</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                        <AccessTimeIcon sx={{ color: 'rgba(255, 255, 255, 0.7)', marginRight: 1 }} />
                        <Typography variant="body2" color="textSecondary">
                          {quiz.duration}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                        <DateRangeIcon sx={{ color: 'rgba(255, 255, 255, 0.7)', marginRight: 1 }} />
                        <Typography variant="body2" color="textSecondary">
                          {quiz.startDate} - {quiz.endDate}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                        <ScoreIcon sx={{ color: 'rgba(255, 255, 255, 0.7)', marginRight: 1 }} />
                        <Typography variant="body2" color="textSecondary">
                          {quiz.totalPoints} points
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </animated.div>
      </Container>
    </Box>
  );
};

export default Home;
