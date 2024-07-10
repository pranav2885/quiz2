import React, { useState } from 'react';
import { Box, Button, Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const QuizQuestion = ({ question, options, onNext }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleNext = () => {
    onNext(selectedOption);
    setSelectedOption('');
  };

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
        <Typography variant="h5" sx={{ color: 'white', marginBottom: 4 }}>
          {question}
        </Typography>
        <RadioGroup
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          {options.map((option, index) => (
            <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
          ))}
        </RadioGroup>
        <Button variant="contained" color="primary" onClick={handleNext} sx={{ marginTop: 4 }}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default QuizQuestion;
