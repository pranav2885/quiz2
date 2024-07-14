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
                  label="Mobile Number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{ style: { color: '#fff' } }}
                  InputProps={{ style: { color: '#fff' } }}
                />
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                  Save
                </Button>
              </Box>
            </Card>
          </animated.div>
        ) : (
          <animated.div style={springProps}>
            <Card sx={{ padding: 4, maxWidth: 800, width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Avatar
                    alt="User Image"
                    src="https://via.placeholder.com/150"
                    sx={{ width: 150, height: 150, marginBottom: 2 }}
                  />
                  <Typography variant="h6" sx={{ color: '#fff' }}>{userData.name}</Typography>
                  <Typography variant="body1" sx={{ color: '#fff' }}>{userData.email}</Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Typography variant="body1" sx={{ color: '#fff' }}>Registration Number: {userData.registrationNumber}</Typography>
                    <Typography variant="body1" sx={{ color: '#fff' }}>Role: {userData.role}</Typography>
                    <Typography variant="body1" sx={{ color: '#fff' }}>Course: {userData.course}</Typography>
                    <Typography variant="body1" sx={{ color: '#fff' }}>Section: {userData.section}</Typography>
                    <Typography variant="body1" sx={{ color: '#fff' }}>Mobile: {userData.mobile}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </animated.div>
        )}
      </Container>
    </Box>
  );
};

export default Dashboard;
