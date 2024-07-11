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
          height: '340px',
          width: '100%',
          maxWidth: '500px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 4 }} textAlign={'left'}>
          {question}
        </Typography>
        <RadioGroup
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          {options.map((option, index) => (
            <FormControlLabel key={index} value={option} control={<Radio sx={{ color: '#fff' }} />} label={option} />
          ))}
        </RadioGroup>
        <Button variant="contained" color="primary" onClick={handleNext} sx={{ marginTop: 4 }}>
          Next
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext} sx={{ marginTop: 4 }}>
          Next
        </Button>
        
      </Box>
    </Box>
  );
};

export default QuizQuestion;
