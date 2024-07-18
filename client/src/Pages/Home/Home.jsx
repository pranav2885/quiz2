import React, { useState } from 'react';
import {
  Box, Typography, AppBar, Toolbar, Container, Grid, Card, CardContent, Avatar,
} from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import LoginDialog from '../../components/LoginDialog/LoginDialog';
import "../../styles/cardsContainer.css";

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    course: '',
    section: '',
    mobile: '',
    name: 'John Doe',
    email: 'john.doe@example.com',
    registrationNumber: '1234567890',
    role: 'Student',
  });
  const navigate = useNavigate();

  const springProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  const handleGoogleLoginSuccess = (response) => {
    console.log('Google login successful', response);
    // Handle the response and update the userData accordingly
    setIsLoggedIn(true);
  };

  const handleGoogleLoginFailure = (response) => {
    console.error('Google login failed', response);
  };

  const handleProfileClick = () => {
    navigate('/dashboard');
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
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
            {isLoggedIn && (
              <Avatar
                src="/avatar.jpg"
                alt={userData.name}
                sx={{ width: 40, height: 40, cursor: 'pointer' }}
                onClick={handleProfileClick}
              />
            )}
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
          {!isLoggedIn ? (
            <LoginDialog
              open={!isLoggedIn}
              handleGoogleLoginSuccess={handleGoogleLoginSuccess}
              handleGoogleLoginFailure={handleGoogleLoginFailure}
            />
          ) : (
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
                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '25px', boxShadow: '2px 2px 15px rgb(193, 193, 193)' }}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Course Information
                      </Typography>
                      {/* <Typography variant="body1">Course: {userData.course}</Typography>
                      <Typography variant="body1">Section: {userData.section}</Typography>
                      <Typography variant="body1">Mobile: {userData.mobile}</Typography> */}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </animated.div>
          )}
        </Container>
      </Box>
    </GoogleOAuthProvider>
  );
};

export default HomePage;
