const express = require('express');
const userRouter = require('./routes/user-router');
const morgan = require('morgan');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();

// access the environment variable set in the start script

if (process.env.NODE_ENV !== "PRODUCTION") {

console.log("=== PRODUCTION | INACTIVE ===");
app.use(morgan('dev'));
} else {

console.log("=== PRODUCTION | ACTIVE ===");
}
app.get("/", (req, res) => {
res.status(200).send("hello world");
});
const server = app.listen(PORT, function() {
console.log(`Server up on ${PORT}`);
});