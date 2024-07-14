import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  IconButton,
  Button,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";

const QuestionPaper = () => {
  const [questionPaper, setQuestionPaper] = useState({
    QuizId: uuidv4(),
    CreaterMail: "",
    title: "",
    noOfQuestions: 1,
    questions: [
      {
        question: "",
        options: [""],
        correctOption: 0,
        mark: 1,
      },
    ],
    openTime: "",
    closeTime: "",
  });

  const handleChange = (field, value) => {
    setQuestionPaper((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questionPaper.questions];
    newQuestions[index] = {
      ...newQuestions[index],
      [field]: value,
    };
    setQuestionPaper((prevState) => ({
      ...prevState,
      questions: newQuestions,
    }));
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const newOptions = [...questionPaper.questions[qIndex].options];
    newOptions[oIndex] = value;
    handleQuestionChange(qIndex, "options", newOptions);
  };

  const addQuestion = () => {
    setQuestionPaper((prevState) => ({
      ...prevState,
      noOfQuestions: prevState.noOfQuestions + 1,
      questions: [
        ...prevState.questions,
        {
          question: "",
          options: [""],
          correctOption: 0,
          mark: 1,
        },
      ],
    }));
  };

  const removeQuestion = (index) => {
    const newQuestions = questionPaper.questions.filter((_, i) => i !== index);
    setQuestionPaper((prevState) => ({
      ...prevState,
      noOfQuestions: prevState.noOfQuestions - 1,
      questions: newQuestions,
    }));
  };

  const addOption = (qIndex) => {
    const newOptions = [...questionPaper.questions[qIndex].options, ""];
    handleQuestionChange(qIndex, "options", newOptions);
  };

  const removeOption = (qIndex, oIndex) => {
    const newOptions = questionPaper.questions[qIndex].options.filter(
      (_, i) => i !== oIndex
    );
    handleQuestionChange(qIndex, "options", newOptions);
  };

  const handleSubmit = () => {
    console.log(questionPaper);
    // Handle the submission logic here
  };

  return (
    <>
    <Card sx={{ maxWidth: 800, margin: "20px auto" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Create Quiz
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
            label="Quiz Title"
            variant="outlined"
            fullWidth
            value={questionPaper.title}
            onChange={(e) => handleChange("title", e.target.value)}
            margin="normal"
          />
          </Grid>
          <Grid item xs={6}>
            <TextField
            label="Creator Email"
            variant="outlined"
            fullWidth
            value={questionPaper.CreaterMail}
            onChange={(e) => handleChange("CreaterMail", e.target.value)}
            margin="normal"
          />
          </Grid>
          <Grid item xs={6}>
            <TextField
            label="Open Time"
            type="datetime-local"
            variant="outlined"
            fullWidth
            value={questionPaper.openTime}
            onChange={(e) => handleChange("openTime", e.target.value)}
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          </Grid>
          <Grid item xs={6}>
            <TextField
            label="Close Time"
            type="datetime-local"
            variant="outlined"
            fullWidth
            value={questionPaper.closeTime}
            onChange={(e) => handleChange("closeTime", e.target.value)}
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          </Grid>
        </Grid>

        {questionPaper.questions.map((question, qIndex) => (
          <Box key={qIndex} sx={{ marginTop: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label={`Question ${qIndex + 1}`}
                  variant="outlined"
                  fullWidth
                  value={question.question}
                  onChange={(e) =>
                    handleQuestionChange(qIndex, "question", e.target.value)
                  }
                  margin="normal"
                />
              </Grid>
              {question.options.map((option, oIndex) => (
                <Grid item xs={12} key={oIndex}>
                  <Box display="flex" alignItems="center">
                    <TextField
                      label={`Option ${oIndex + 1}`}
                      variant="outlined"
                      value={option}
                      onChange={(e) =>
                        handleOptionChange(qIndex, oIndex, e.target.value)
                      }
                      fullWidth
                    />
                    <IconButton
                      onClick={() => removeOption(qIndex, oIndex)}
                      disabled={question.options.length === 1}
                    >
                      <Remove />
                    </IconButton>
                  </Box>
                </Grid>
              ))}
              <Grid item xs={12}>
                <center>
                  <IconButton
                    onClick={() => addOption(qIndex)}
                    sx={{
                      marginBottom: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#cfcfcf",
                    }}
                  >
                    <Add />
                  </IconButton>
                </center>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Correct Option (Index)"
                  type="number"
                  variant="outlined"
                  value={question.correctOption}
                  onChange={(e) =>
                    handleQuestionChange(
                      qIndex,
                      "correctOption",
                      parseInt(e.target.value)
                    )
                  }
                  fullWidth
                  InputProps={{
                    inputProps: {
                      min: 0,
                      max: question.options.length - 1,
                    },
                  }}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Mark"
                  type="number"
                  variant="outlined"
                  value={question.mark}
                  onChange={(e) =>
                    handleQuestionChange(
                      qIndex,
                      "mark",
                      parseFloat(e.target.value)
                    )
                  }
                  fullWidth
                  InputProps={{
                    inputProps: { min: 1 },
                  }}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => removeQuestion(qIndex)}
                  fullWidth
                >
                  Remove Question
                </Button>
              </Grid>
            </Grid>
          </Box>
        ))}
        <Box sx={{ marginTop: 4 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={addQuestion}
            fullWidth
          >
            Add Question
          </Button>
        </Box>
        <Box sx={{ marginTop: 4 }}>
          <Button
            variant="contained"
            color="success"
            onClick={handleSubmit}
            fullWidth
          >
            Submit Quiz
          </Button>
        </Box>
      </CardContent>
    </Card>
    </>
  );
};

export default QuestionPaper;
