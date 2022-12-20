var createError = require("http-errors");
const mongoose = require('mongoose')
const express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
require('dotenv').config()

var indexRouter = require("./routes/Home");
var CronogramaRouter = require("./routes/Cronograma");
var EquipeRouter = require("./routes/Equipe");
var MetasRouter = require("./routes/Metas");
const app = express();

const dbUri = process.env.DB_URI

mongoose.connect(dbUri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, () => console.log('CONEXÃO COM SUCESSO PARA O MONGODB'),
mongoose.set("strictQuery", true))


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
    console.log("SERVIDOR RODANDO NA PORTA 9000");
});

app.use("/", indexRouter);
app.use("/Cronograma", CronogramaRouter);
app.use("/Equipe", EquipeRouter);
app.use("/Metas", MetasRouter);
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
