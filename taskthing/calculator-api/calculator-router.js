//imports
const express = require('express');
const calculator = require('./calculator');
const router = express.Router();

// localhost:3000/add?num1=32&num2=4

router.get('/add', doBinaryOperation);
router.get('/subtract', doBinaryOperation);
router.get('/multiply', doBinaryOperation);
router.get('/division', doBinaryOperation);
module.exports = router;

//functions
function doBinaryOperation(request, response) {

    const num1 = Number(request.query.num1); // returns NaN if not a number
    const num2 = Number(request.query.num2);
    
    if (isNaN(num1) || isNaN(num2)) {
    response.status(400).send("Inputs must be numerical");
    return;
    }
    
    // returns paths
    
    let result;
    switch (request.path.toLowerCase()) {
    case "/add":
        result = calculator.add(num1, num2);
        break;
    case "/subtract":
        result = calculator.subtract(num1, num2);
        break;
    case "/multiply":
        result = calculator.multiply(num1, num2);
        break;
    case "/divide":
        result = calculator.division(num1, num2);
        break;
    default:
        response.status(400).send("Bad Request , Try again");
    }
    
    return response.json({
    "operation": request.path,
    "num1": num1,
    "num2": num2,
    "result": result
    });
    }
    
    module.exports = router;