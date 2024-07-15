import React, { useState } from 'react';
import {
  Box, Typography, Button, AppBar, Toolbar, Container, Grid, Card, CardContent, TextField, Avatar,
} from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import "../../styles/cardsContainer.css";

const Dashboard = () => {
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

  const [formData, setFormData] = useState({
    course: '',
    section: '',
    mobile: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setUserData((prevData) => ({
      ...prevData,
      ...formData,
    }));
    setIsLoggedIn(true);
  };

  const springProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  const handleGoogleLoginSuccess = (response) => {
    console.log('Google login successful', response);
    // Handle the response and update the userData accordingly
    // setIsLoggedIn(true);
  };

  const handleGoogleLoginFailure = (response) => {
    console.error('Google login failed', response);
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
          {!isLoggedIn ? (
            <animated.div style={springProps}>
              <Card sx={{ padding: 4, maxWidth: 500, width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '25px', boxShadow: '2px 2px 15px rgb(193, 193, 193)' }}>
                <Typography variant="h5" sx={{ marginBottom: 2, textAlign: 'center', color: '#fff' }}>
                  Login
                </Typography>
                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {/* <TextField
                    label="Course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    fullWidth
                    variant="outlined"
                    InputLabelProps={{ style: { color: '#fff' } }}
                    InputProps={{ style: { color: '#fff' } }}
                  />
                  <TextField
                    label="Section"
                    name="section"
                    value={formData.section}
                    onChange={handleChange}
                    fullWidth
                    variant="outlined"
                    InputLabelProps={{ style: { color: '#fff' } }}
                    InputProps={{ style: { color: '#fff' } }}
                  />
                  <TextField
                    label="Mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    fullWidth
                    variant="outlined"
                    InputLabelProps={{ style: { color: '#fff' } }}
                    InputProps={{ style: { color: '#fff' } }}
                  /> */}
                  {/* <Button variant="contained" onClick={handleSubmit} sx={{ marginTop: 2 }}>
                    Login
                  </Button> */}
                  {/* <Typography variant="body2" sx={{ color: 'rgb(150, 150, 150)', textAlign: 'center', fontSize: '12px', marginTop: '10px' }}>
                    Or
                  </Typography> */}
                  <GoogleLogin
                    onSuccess={handleGoogleLoginSuccess}
                    onFailure={handleGoogleLoginFailure}
                    render={(renderProps) => (
                      <Button 
                        onClick={renderProps.onClick} 
                        disabled={renderProps.disabled} 
                        sx={{ 
                          backgroundColor: '#DB4437', 
                          color: '#fff', 
                          marginTop: 2,
                          '&:hover': {
                            backgroundColor: '#C23321',
                          },
                          display: 'flex',
                          alignItems: 'center',
                          textTransform: 'none',
                        }}
                        startIcon={
                          <svg className="svg" viewBox="0 0 533.5 544.3" style={{ height: 24 }}>
                            <path className="red" d="M533.5 278.4c0-17.1-1.5-34-4.4-50.4H272v95.3h147c-6.3 33.5-25 61.7-51.7 80.4l82.8 64c48.5-44.8 76.4-110.8 76.4-189.3z" fill="#EA4335"/>
                            <path className="green" d="M272 544.3c69.5 0 127.6-22.7 170.2-61.8l-82.8-64c-23.2 15.6-52.9 25-87.4 25-67.4 0-124.6-45.4-145-106.4H24v66.5c42.5 83.7 130.2 140.2 248 140.2z" fill="#34A853"/>
                            <path className="yellow" d="M126.6 328.1c-6.2-18.5-9.8-38.2-9.8-58.1s3.6-39.6 9.8-58.1V145h-88C14.4 183.4 0 237.1 0 290s14.4 106.6 38.6 145l88-66.9z" fill="#FBBC05"/>
                            <path className="blue" d="M272 110.8c37.9 0 71.6 13.1 98.4 34.8l74-74C416.6 27.1 359.1 0 272 0 152.2 0 64.5 56.5 24 145l88 66.9c20.4-61 77.6-106.4 145-106.4z" fill="#4285F4"/>
                          </svg>
                        }
                      >
                        Login with Google
                      </Button>
                    )}
                  />
                </Box>
              </Card>
            </animated.div>
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

export default Dashboard;
