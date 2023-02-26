require("dotenv").config();
require('./passport')
const express = require("express");
const cors = require("cors");
const dbConnect = require("./connection/db");
const passport = require("passport");
const app = express();
app.use(cors());
const isLogIn = require('./utils/issLogIn')
const session = require('express-session');


const port = process.env.PORT || 8080;

app.use(express.json());

app.use(session({ secret: process.env.SECRET}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/login', (req, res) => {
    res.send('<a href="/auth/google">Autenticate with Google</a>')
})

app.get('/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile'] })
)

app.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: '/api-docs',
        failureRedirect: '/auth/failure',
    })
)

app.get('/auth/failure', (req, res) => {
    res.send("Something went wrong...")
})

// LogOut
app.get('/logout',  (req, res) => {
    req.session.destroy();
    res.send('Goodbye!');
});


/*Routes*/
app.use("/", isLogIn, require("./routes"));

app.listen(port, () => {
    console.log("Using https://localhost/" + port)
})

dbConnect()