import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  TextField,
  IconButton,
  Tooltip,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const QuizCreator = () => {
  const [questions, setQuestions] = useState([]);
  const [numQuestions, setNumQuestions] = useState('');

  const handleNumQuestionsChange = (e) => {
    setNumQuestions(e.target.value);
  };

  const generateQuestions = () => {
    const newQuestions = Array.from({ length: numQuestions }, (_, index) => ({
      id: index,
      question: '',
      options: [''],
      correctAnswer: '',
    }));
    setQuestions(newQuestions);
  };

  const handleQuestionChange = (id, value) => {
    const updatedQuestions = questions.map((q) =>
      q.id === id ? { ...q, question: value } : q
    );
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionId, index, value) => {
    const updatedQuestions = questions.map((q) =>
      q.id === questionId
        ? {
            ...q,
            options: q.options.map((option, i) => (i === index ? value : option)),
          }
        : q
    );
    setQuestions(updatedQuestions);
  };

  const handleAddOption = (questionId) => {
    const updatedQuestions = questions.map((q) =>
      q.id === questionId
        ? { ...q, options: [...q.options, ''] }
        : q
    );
    setQuestions(updatedQuestions);
  };

  const handleDeleteOption = (questionId, index) => {
    const updatedQuestions = questions.map((q) =>
      q.id === questionId
        ? { ...q, options: q.options.filter((_, i) => i !== index) }
        : q
    );
    setQuestions(updatedQuestions);
  };

  const handleCorrectAnswerChange = (questionId, value) => {
    const updatedQuestions = questions.map((q) =>
      q.id === questionId ? { ...q, correctAnswer: value } : q
    );
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      id: questions.length,
      question: '',
      options: [''],
      correctAnswer: '',
    };
    setQuestions([...questions, newQuestion]);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to top, #00008B, #87CEEB)',
        color: '#fff',
        padding: 4,
        minHeight: '100vh',
      }}
    >
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          Quiz Creator
        </Typography>
        <TextField
          type="number"
          label="Number of Questions"
          value={numQuestions}
          onChange={handleNumQuestionsChange}
          sx={{ marginBottom: 2, backgroundColor: '#fff', borderRadius: 1 }}
          inputProps={{ min: 1 }}
        />
        <Button variant="contained" onClick={generateQuestions}>
          Generate
        </Button>
      </Box>
      {questions.map((q, qIndex) => (
        <Box
          key={qIndex}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            padding: 4,
            borderRadius: 2,
            textAlign: 'center',
            width: '100%',
            maxWidth: '500px',
            marginBottom: 4,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          }}
        >
          <TextField
            label={`Question ${qIndex + 1}`}
            value={q.question}
            onChange={(e) => handleQuestionChange(q.id, e.target.value)}
            fullWidth
            sx={{ marginBottom: 2, borderRadius: 1 }}
            variant='standard'
          />
          {q.options.map((option, oIndex) => (
            <Box key={oIndex} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
              <TextField
                label={`Option ${oIndex + 1}`}
                value={option}
                onChange={(e) => handleOptionChange(q.id, oIndex, e.target.value)}
                fullWidth
                sx={{ backgroundColor: '#fff', borderRadius: 1 }}
              />
              <IconButton onClick={() => handleDeleteOption(q.id, oIndex)}>
                <DeleteIcon sx={{ color: '#fff' }} />
              </IconButton>
            </Box>
          ))}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 2 }}>
            <Tooltip title="Add Option">
              <IconButton onClick={() => handleAddOption(q.id)}>
                <AddIcon sx={{ color: '#fff' }} />
              </IconButton>
            </Tooltip>
          </Box>
          <TextField
            label="Correct Answer"
            value={q.correctAnswer}
            onChange={(e) => handleCorrectAnswerChange(q.id, e.target.value)}
            fullWidth
            sx={{ marginBottom: 2, backgroundColor: '#fff', borderRadius: 1 }}
          />
        </Box>
      ))}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Tooltip title="Add Question">
          <IconButton onClick={handleAddQuestion}>
            <AddIcon sx={{ color: '#fff' }} />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default QuizCreator;
