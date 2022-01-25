require('dotenv').config({
    path: `./env-files/${process.env.NODE_ENV || 'development'}.env`,
})
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const SessionStore = require('express-session-sequelize')(session.Store);
const cors = require('cors');
const morgan = require('morgan');
const path = require("path");
const helmet = require('helmet');
const { expressCspHeader, INLINE, NONE, SELF, EVAL } = require('express-csp-header');

console.log(process.env.NODE_ENV)

const app = express();

const { sequelize } = require('./models');


const initAuthMiddleware = require('./features/user/init-auth-middleware')
const indexRouter = require('./routes/index');

const sequelizeSessionStore = new SessionStore({ db: sequelize })

/*app.set('trust proxy', true);*/
app.use(helmet())
app.use(expressCspHeader({
    directives: {
        'script-src': [SELF, INLINE, "https:", EVAL],
    }
}));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECTET, { sameSite: "none", secure: true }));
app.use(morgan("dev"))


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header(
        'Access-Control-Allow-Headers',
        'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept'
    );
    next();
});

app.use(session({
    store: sequelizeSessionStore,
    resave: true,
    saveUninitialized: false,
    secret: "" + process.env.COOKIE_SECTET + "",
    name: 'sba-cid',
    cookie: {
        expires: Date.now() + parseInt(process.env.COOKIE_EXPIRATION_MS, 10),
        maxAge: parseInt(process.env.COOKIE_EXPIRATION_MS, 10),
    }
}))


/******************* PM2 *******************/
let isDisableKeepAlive = false

app.use((req, res, next) => {
    if (isDisableKeepAlive) {
        res.set(`Connection`, `close`)
    }
    next()
})

process.on(`SIGINT`, async () => {
    isDisableKeepAlive = true
    console.log(`try closing server`)
    await app.close(() => {
        console.log(`server closed`)
        process.exit(0)
    })
})

/*******************************************/
sequelize.sync({ force: false })
    .then(() => {
        console.log('DB Connection Success')
    }).catch((err) => {
        console.error(err)
    })


initAuthMiddleware(app)

app.use('/api/', indexRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server Listening on ${process.env.PORT}`);
})
