const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const { getUserForLoginData, getUserByUserId } = require('./repository');

module.exports = function initAuthMiddleware(app) {
  
  passport.use('local-login',
    new LocalStrategy({
      usernameField:'userId',
      passwordField:'password',
      session:false
    },
    async (userId, password, done) => {
      const user = await getUserForLoginData(userId, password);
      if (!user) {
        return done(null, false);
      }
      return done(null, user);
    })
  );

  passport.serializeUser((user, done) => done(null, user.userId));

  passport.deserializeUser(async (userId, done) => {
    const user = await getUserByUserId(userId);
    if (!user) {
      return done(`Could not deserialize user with id ${userId}`);
    }
    return done(null, user);
  });

  app.use(passport.initialize());
  app.use(passport.session());
};
