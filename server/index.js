const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("./controllers/auth"); // Import the authentication module
const User = require("./models/User");

dotenv.config();
app.use(cors());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ['GET','POST','PUT','DELETE','PATCH'],
    credentials: true,
  })
);
app.use(express.json());

// Mongoose Connect
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo DB connected"))
  .catch((err) => {
    console.log(`Error Occurred : ${err}`);
  });

// Setup Session
const sessionMiddleware = session({
  secret: "75692834uiwhfjdbgiasdjn9384iuyr92348fherisgh458",
  resave: false,
  saveUninitialized: true,
});

app.use(sessionMiddleware);

// Setup Passport
app.use(passport.initialize());
app.use(passport.session());

// Initialize Google Login
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/dashboard",
    failureRedirect: "http://localhost:3000/",
  })
);

app.get('/login/success', (req, res) => {
  if (req.user) {
    res.status(200).json({ authenticated: true, user: req.user });
  } else {
    res.status(401).json({ authenticated: false, message: "Not Authorized" });
  }
});

app.get('/logout', (req, res, next) => {
  req.logOut(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('http://localhost:3000/');
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
