import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
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
      <Card
        sx={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxwidth: "50%",
          height: "80%",
          background: "rgb(255, 255, 255)",
          borderRadius: "1rem",
          margin: '15px',
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          transition: "all ease-in-out 0.3s",
          "&:hover": {
            backgroundColor: "#fdfdfd",
            boxShadow:
              "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
          },
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Create Quiz
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Quiz Title"
                variant="standard"
                fullWidth
                value={questionPaper.title}
                onChange={(e) => handleChange("title", e.target.value)}
                margin="normal"
              />
            </Grid>
            {/* <Grid item xs={6}>
              <TextField
                label="Creator Email"
                variant="outlined"
                fullWidth
                value={questionPaper.CreaterMail}
                onChange={(e) => handleChange("CreaterMail", e.target.value)}
                margin="normal"
              />
            </Grid> */}
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
                label="Duration (in min)"
                type="number"
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
                      <Tooltip title='Delete' placement="right">
                    <IconButton
                      onClick={() => removeOption(qIndex, oIndex)}
                      disabled={question.options.length === 1}
                    >
                      <DeleteRoundedIcon sx={{color: "#E86D6D"}} />
                    </IconButton>
                    </Tooltip>'
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
                <Tooltip title='Start counting from zero' arrow placement="top">
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
                </Tooltip>
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
