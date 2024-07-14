import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Link,
  AppBar,
  Toolbar,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ScoreIcon from "@mui/icons-material/Score";
import "../../styles/cardsContainer.css";

const Home = ({
  username,
  onQuizSelect,
  onShowLeaderboard,
  onHostPage,
  onGoToDashboard,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const springProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  const dummyQuizzes = Array.from({ length: 10 }).map((_, index) => ({
    title: `Quiz ${index + 1}`,
    duration: `${30 + index * 5} mins`,
    startDate: `2024-07-${10 + index}`,
    endDate: `2024-07-${15 + index}`,
    totalPoints: 100 + index * 10,
  }));

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(to top, #327D8F, #508C9F)",
        color: "#fff",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "200%",
          height: "200%",
          background:
            "linear-gradient(45deg, rgba(0, 0, 50, 0.8), rgba(0, 0, 150, 0.8))",
          zIndex: -1,
          animation: "moveBackground 20s linear infinite",
        },
        "@keyframes moveBackground": {
          "0%": { transform: "translate(-50%, -50%)" },
          "100%": { transform: "translate(0, 0)" },
        },
      }}
    >
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent" }}
        elevation={4}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 600,
            }}
          >
            Quiz App
          </Typography>
          <Button color="inherit" onClick={onShowLeaderboard}>
            Leaderboard
          </Button>
          <Button color="inherit" onClick={onHostPage}>
            Host a Quiz
          </Button>
          <Button color="inherit" onClick={onGoToDashboard}>
            Dashboard
          </Button>
        </Toolbar>
      </AppBar>
      <Container
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: 2, sm: 4 },
          overflow: "hidden",
          margin: { xs: "10px", sm: "20px" },
        }}
      >
        <animated.div style={springProps}>
          <Typography
            variant="h6"
            sx={{
              marginBottom: { xs: 2, sm: 1 },
              textAlign: "left",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 100,
              color: "#fff",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Hi, {username}!
          </Typography>
          <Box className="cardContainer" sx={{ width: "100%" }}>
            <Typography
              variant="h5"
              sx={{ marginBottom: 2, textAlign: "center" }}
            >
              Live Quizzes
            </Typography>
            <Grid container spacing={2}>
              {dummyQuizzes.map((quiz, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Card
                    onClick={() => onQuizSelect(quiz)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    sx={{
                      cursor: "pointer",
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                      },
                      transform:
                        hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                      transition: "transform 0.3s, background-color 0.3s",
                      padding: 2,
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                      borderRadius: 4,
                      minHeight: "150px",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" sx={{ color: "#fff" }}>
                        {quiz.title}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: 1,
                        }}
                      >
                        <AccessTimeIcon
                          sx={{
                            color: "rgba(255, 255, 255, 0.7)",
                            marginRight: 1,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                        >
                          {quiz.duration}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: 1,
                        }}
                      >
                        <DateRangeIcon
                          sx={{
                            color: "rgba(255, 255, 255, 0.7)",
                            marginRight: 1,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                        >
                          {quiz.startDate} - {quiz.endDate}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: 1,
                        }}
                      >
                        <ScoreIcon
                          sx={{
                            color: "rgba(255, 255, 255, 0.7)",
                            marginRight: 1,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                        >
                          {quiz.totalPoints} points
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </animated.div>
      </Container>
    </Box>
  );
};

export default Home;
