const express = require('express');
const router = express.Router();

let idCounter = 3;
const database = [
    {
        id: 1,
        size: "Large",
        colour: "Green",
        age: "16",
        snappy: false,
        species: "box turtle",
        isNinja: true,
        born: new Date('2006-05-14')
    },
    {
        id: 2,
        size: "small",
        colour: "yellow",
        age: "122",
        snappy: true,
        species: "snapping turtle",
        isNinja: false,
        born: new Date('1900-02-24')
    }
];

router.get('/getAll', (request, response) => {
    response.contentType('application/json')
        .status(200)
        .json(database);
    console.log(`getAll request sent`);
});

router.post('/create', (request, response, next) => {
    if (Object.keys(request.body).length == 0) return next({
        statusCode: 400, 
        message: 'body cannot be empty'
    })
    const newTurtleData = request.body;
    newTurtleData.id = idCounter++;
    database.push(newTurtleData);

    response.status(201).json(newTurtleData);
});

router.put('/update', (request, response, next) => {
    if (Object.keys(request.body).length == 0) return next({
        statusCode: 400, 
        message: 'body cannot be empty'
    })
    const id = Number(request.params.id);
    if(isNaN(id)) return next({ statusCode: 400, message: 'ID must be a number'});
    const turtle = database.find((turtle) => {return turtle.id == id;});
    if (!turtle) return next({
        statusCode: 404,
        message: `Turtle does not exist with id ${id}`
    });
    if (request.body.snappy) turtle.snappy = request.body.snappy;
    if (request.body.size) turtle.size = request.body.size;
    if (request.body.isNinja) turtle.isNinja = request.body.isNinja;

    response.status(200).json(turtle);
});

router.delete('/delete/:id', (request, response, next) => {
    const id = Number(request.params.id);

    if(isNaN(id)) return next({ statusCode: 400, message: 'ID must be a number'});

    const turtleIndex = database.findIndex(function(turtle) {
        return turtle.id == id;
    });
    if (turtleIndex == -1) return next({
        statusCode: 404,
        message: `Turtle does not exist with id ${id}`
    });

    database.splice(turtleIndex, 1);
    response.status(200)
        .send('Turtle deleted successfully');
});

module.exports = router;