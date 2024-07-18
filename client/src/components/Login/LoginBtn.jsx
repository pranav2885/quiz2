import React from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography,
  Box,
} from "@mui/material";
import { Google as GoogleIcon } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const CustomButton = styled("button")(({ theme, buttonWidth }) => ({
  fontFamily: "inherit",
  fontSize: "18px",
  background:
    "linear-gradient(90deg, rgba(24,119,240,1) 0%, rgba(29,37,253,1) 50%, rgba(11,9,140,1) 100%)",
  color: "white",
  padding: "0.8em 1.2em",
  display: "grid",
  gridTemplateColumns: "auto 1fr", // Adjust grid template to handle content width
  alignItems: "center",
  border: "none",
  borderRadius: "16px",
  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
  transition: "all 0.3s",
  width: buttonWidth || "200px", // Use buttonWidth prop for dynamic width
  height: "60px",
  "&:hover": {
    cursor: "pointer",
    transform: "translateY(-3px)",
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
    "& .svg-wrapper": {
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      marginRight: "0.5em",
      animation: "bounce 1.2s ease-in-out",
    },
  },
  "&:active": {
    transform: "scale(0.95)",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
  },
}));

const SvgWrapper = styled("span")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "30px", // Set width for the SVG wrapper
  height: "30px", // Set height for the SVG wrapper
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  transition: "all 0.3s",
}));

const Text = styled("span")({
  overflow: "hidden",
});

const bounceKeyframes = `
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
const loginWithGoogle = () => {
  window.open("http://localhost:8080/auth/google", "_self");
};
const LoginBtn = ({ open, onClose, onLogin }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{ style: { borderRadius: 20 } }}
    >
      <DialogContent sx={{ textAlign: "center", padding: "30px" }}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
          >
            Sign In
          </Typography>
        </Box>
        <DialogContentText>
          <Typography sx={{ marginBottom: 2 }}>
            Please sign in with your Google account to continue.
          </Typography>
        </DialogContentText>
        <DialogActions sx={{ justifyContent: "center" }}>
          <CustomButton buttonWidth="250px" onClick={loginWithGoogle}>
            <SvgWrapper className="svg-wrapper">
              <GoogleIcon sx={{ width: "24px", height: "24px" }} />
            </SvgWrapper>
            <Text>Sign in with Google</Text>
            <style>{bounceKeyframes}</style>
          </CustomButton>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default LoginBtn;
