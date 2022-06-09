// Turtle
// - create
// - read all
// - update
// - delete one

const { response } = require('express');
const express = require('express');
const morgan = require('morgan');
const turtleRouter = require('./route/turtle-router');
const port = process.env.PORT || 3000; // null checker 

const app = express();

app.use(morgan('dev')); 
app.use(express.json());
app.use('/turtle', turtleRouter);

app.use(function(error, request, response, next) {
    response.status(error.statusCode || 500)
    .send(error.message || "Something went wrong...");
});

app.listen(port, () => console.log("Its alive"));