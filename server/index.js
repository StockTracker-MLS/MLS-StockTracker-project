require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
require("./config/passport"); // load strategy
const authRoutes = require("./routes/auth");

const app = express();

// Session middleware (must come before passport)
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use("/auth", authRoutes);
app.use(passport.initialize());
app.use(passport.session());
