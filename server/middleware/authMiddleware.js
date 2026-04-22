function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
}

// Use on any protected route
app.get("/dashboard", isLoggedIn, (req, res) => {
  res.send(`Welcome, ${req.user.name}`);
});
