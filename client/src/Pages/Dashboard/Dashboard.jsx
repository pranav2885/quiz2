import React, { useState } from 'react';
import {
  Box, Typography, AppBar, Toolbar, Container, Grid, Card, CardContent, Avatar,
} from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import { GoogleOAuthProvider } from '@react-oauth/google';
import "../../styles/cardsContainer.css";

const Dashboard = () => {
  const [userData, setUserData] = useState({
    course: '',
    section: '',
    mobile: '',
    name: 'John Doe',
    email: 'john.doe@example.com',
    registrationNumber: '1234567890',
    role: 'Student', // Change to 'Teacher' for testing teacher role
  });

  const springProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <GoogleOAuthProvider clientId="1091686650208-dvrt5n0ffi6k73g5k98bl3ja1pei242t.apps.googleusercontent.com">
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(to top, #508c9f, #508c9f)',
          color: '#fff',
        }}
      >
        <AppBar position="static" sx={{ backgroundColor: '#508c9f' }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              Dashboard
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
            overflow: 'hidden',
            margin: { xs: '10px', sm: '20px' },
          }}
        >
          <animated.div style={springProps}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '25px', boxShadow: '2px 2px 15px rgb(193, 193, 193)' }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Avatar
                      src="/avatar.jpg"
                      alt={userData.name}
                      sx={{ width: 80, height: 80, margin: '0 auto 10px' }}
                    />
                    <Typography variant="h5" gutterBottom>
                      {userData.name}
                    </Typography>
                    <Typography variant="body1">{userData.role}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {userData.email}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Registration No: {userData.registrationNumber}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              {userData.role === 'Student' ? (
                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '25px', boxShadow: '2px 2px 15px rgb(193, 193, 193)' }}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Quiz Scores
                      </Typography>
                      <Typography variant="body1">Score: 85</Typography>
                      <Typography variant="body1">Last Quiz: 90</Typography>
                      <Typography variant="body1">Average: 88</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ) : (
                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '25px', boxShadow: '2px 2px 15px rgb(193, 193, 193)' }}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Active Quizzes
                      </Typography>
                      <Typography variant="body1">Quiz 1: Math</Typography>
                      <Typography variant="body1">Quiz 2: Science</Typography>
                      <Typography variant="body1">Quiz 3: History</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )}
            </Grid>
          </animated.div>
        </Container>
      </Box>
    </GoogleOAuthProvider>
  );
};

export default Dashboard;
