var createError = require("http-errors");
const express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var indexRouter = require("./routes/index");
var testAPIRouter = require("./routes/testAPI");
var CronogramaRouter = require("./routes/Cronograma");
const app = express();


app.use("/api", require("./routes/api"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.listen(9000, function(){
    console.log("server running");
});
app.use("/", indexRouter);
app.use("/Cronograma", CronogramaRouter);


app.use(function(req, res, next) {
    next(createError(404));
});


app.use(function(err, req, res, next) {
    
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
