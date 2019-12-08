var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var config = require ("./config/db.js");
var mongoose = require ("mongoose");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

//mongoose setup
mongoose.Promise = Promise;
mongoose.connect(config.database, { useNewUrlParser: true });
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`);
});


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;