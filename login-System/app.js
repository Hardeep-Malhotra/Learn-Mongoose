const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");

const User = require("./model/User");

const app = express();

// DB connect
mongoose.connect("mongodb://127.0.0.1:27017/loginDB")
    .then(() => console.log("DB Connected"))
    .catch(err => console.log(err));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// Passport config
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routes
app.get("/", (req, res) => {
    res.render("home");
});

app.get("/secret", isLoggedIn, (req, res) => {
    res.render("secret");
});

app.get("/register", (req, res) => {
    res.render("register");
});

// REGISTER (secure — hash stored)
app.post("/register", (req, res) => {
    User.register(
        new User({ username: req.body.username }),
        req.body.password,
        function (err, user) {
            if (err) {
                console.log(err);
                return res.send("User already exists");
            }
            passport.authenticate("local")(req, res, function () {
                res.redirect("/secret");
            });
        }
    );
});

app.get("/login", (req, res) => {
    res.render("login");
});

// LOGIN (passport handled)
app.post("/login",
    passport.authenticate("local", {
        successRedirect: "/secret",
        failureRedirect: "/login"
    })
);

app.get("/logout", (req, res, next) => {
    req.logout(function (err) {
        if (err) return next(err);
        res.redirect("/");
    });
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
}

app.listen(3000, () => {
    console.log("Server Has Started!");
});
