const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      // profile contains: profile.id, profile.displayName, profile.emails[0].value
      // Find or create the user in your DB here
      try {
        let user = await db.query("SELECT * FROM users WHERE google_id = $1", [
          profile.id,
        ]);

        if (user.rows.length === 0) {
          // New user — insert into DB
          user = await db.query(
            "INSERT INTO users (google_id, name, email) VALUES ($1, $2, $3) RETURNING *",
            [profile.id, profile.displayName, profile.emails[0].value]
          );
        }
        return done(null, user.rows[0]);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  const user = await db.query("SELECT * FROM users WHERE id = $1", [id]);
  done(null, user.rows[0]);
});
