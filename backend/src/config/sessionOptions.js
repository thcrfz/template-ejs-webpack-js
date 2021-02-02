import mongoose from 'mongoose';
import session from 'express-session';

const MongoStore = require('connect-mongo')(session);

const sessionOptions = session({
  secret: 'sdsjdikiwdkdsdfds',
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

export default sessionOptions;
