const express = require('express');
const Turtle = require('../model/Turtle');

const router = express.Router();

router.get('/getAll', async (request, response, next) => {
    response.contentType('application/json') 
            .status(200)
            .json(await Turtle.find()); 
});

router.get('/getById/:id', async (request, response, next) => {
    response.contentType('application/json') 
            .status(200)
            .json(await Turtle.findById(request.params.id)); 
});

router.post('/create', async (request, response, next) => {
    if (Object.keys(request.body).length == 0) return next({ 
        statusCode: 400, 
        message: 'Body cannot be empty'
    });
    const turtle = new Turtle(request.body);
    await turtle.save();

    response.status(201).json(turtle);
});

router.put('/update/:id', async (request, response, next) => {
    if (Object.keys(request.body).length == 0) return next({ 
        statusCode: 400, 
        message: 'Body cannot be empty'
    });
    const turtle = await Turtle.updateOne({_id: request.params.id}, request.body);

    if(turtle){
        response.status(200).json(await Turtle.findById(request.params.id));
    }else {
        next({statusCode: 404, message: `Turtle with id ${request.params.id} does not exist`})
    }
});

router.delete('/delete/:id', async (request, response, next) => {
    const id = request.params.id;

    const turtle = await Turtle.findByIdAndDelete(id);

    if(turtle){
        response.status(200).json(turtle);
    }else {
        next({statusCode: 404, message: `Turtle with id ${request.params.id} does not exist`})
    }
});
module.exports = router;