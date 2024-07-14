import React, { useState } from 'react';
import {
  Box, Typography, Button, AppBar, Toolbar, Container, Grid, Card, CardContent, TextField, Avatar,
} from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
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

  return (
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
        background: 'linear-gradient(to top, #00008B, #87CEEB)',
        color: '#fff',
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: '#000' }}>
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
            <Card sx={{ padding: 4, maxWidth: 500, width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
              <Typography variant="h5" sx={{ marginBottom: 2, textAlign: 'center', color: '#fff' }}>
                Login
              </Typography>
              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
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
                />
                <Button variant="contained" onClick={handleSubmit} sx={{ marginTop: 2 }}>
                  Login
                </Button>
              </Box>
            </Card>
          </animated.div>
        ) : (
          <animated.div style={springProps}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
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
                <Card sx={{ height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Course Information
                    </Typography>
                    <Typography variant="body1">Course: {userData.course}</Typography>
                    <Typography variant="body1">Section: {userData.section}</Typography>
                    <Typography variant="body1">Mobile: {userData.mobile}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </animated.div>
        )}
      </Container>
    </Box>
  );
};

export default Dashboard;
