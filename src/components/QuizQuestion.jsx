// src/components/QuizQuestion.js

import React from 'react';
import { Box, Button, Typography, Radio, RadioGroup, FormControlLabel } from '@mui/material';

const QuizQuestion = ({ question, options, onNext }) => {
  const [selectedOption, setSelectedOption] = React.useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#87CEEB', // Light blue background
      }}
    >
      <Box
        sx={{
          backgroundColor: '#1A1A2E', // Dark background for the container
          padding: 4,
          borderRadius: 2,
          textAlign: 'left',
          width: '400px', // Fixed width
          margin: '2',
        }}
      >
        <Typography variant="h6" sx={{ color: 'white', marginBottom: 2 }}>
          Question 1/5
        </Typography>
        <Typography sx={{ color: 'white', marginBottom: 2}}>
          {question}
        </Typography>
        <RadioGroup value={selectedOption} onChange={handleChange}>
          {options.map((option, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: '#2E2E4E', // Lighter color for the options
                borderRadius: 1,
                marginBottom: 1,
                padding: 1,
              }}
            >
              <FormControlLabel
                value={option}
                control={<Radio sx={{ color: 'white' }} />}
                label={<Typography sx={{ color: 'white' }}>{option}</Typography>}
              />
            </Box>
          ))}
        </RadioGroup>
        <Button variant="contained" color="secondary" onClick={() => onNext(selectedOption)}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default QuizQuestion;
