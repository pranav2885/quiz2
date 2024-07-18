// server/controllers/auth.js

const passport = require('passport');
const OAuth2Strategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');
require('dotenv').config();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

passport.use(
  new OAuth2Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URI
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails[0].value;
        const domain = email.split('@')[1];

        // Check if the email domain is "srmap.edu.in"
        if (domain !== 'srmap.edu.in') {
          return done(null, false, { message: 'Unauthorized domain' });
        }

        const displayName = profile.displayName.split(' | ')[0] || profile.displayName;
        const rollNo = profile.displayName.split(' | ')[1] || '';
        const photoUrl = profile.photos[0].value;
        const role = assignRole(email);
        const firstName = profile.name.givenName;
        const lastName = profile.name.familyName.split(' | ')[0];

        let user = await User.findOneAndUpdate(
          { email },
          {
            email,
            displayName,
            photoUrl,
            rollNo,
            role,
            firstName,
            lastName
          },
          { new: true, upsert: true }
        );

        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

const assignRole = (email) => {
  const localPart = email.split('@')[0];
  if (localPart.includes('_')) {
    return 'Student';
  } else if (localPart.includes('.')) {
    return 'Faculty';
  } else {
    return 'Unknown';
  }
};

module.exports = passport;
