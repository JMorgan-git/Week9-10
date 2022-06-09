const express = require('express');
const router = express.Router();

let idCounter = 4;
const database = [
    {
        id: 1,
        title: "Clean",
        desc: "Clean the entire kitchen",
        categories: "cleaning",
        status: "Doing",
    },
    {
        id: 2,
        title: "Paint",
        desc: "Repaint livingroom",
        categories: "DIY",
        status: "Todo",
    },
    {
        id: 3,
        title: "Dog",
        desc: "Walk the dog, wash the dog",
        categories: "Pets",
        status: "Done",
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
    const newTodo = request.body;
    newTodo.id = idCounter++;
    database.push(newTodo);
    
    response.status(201).json(newTodo);
});

router.put('/update/:id', (request, response, next) => {
    if (Object.keys(request.body).length == 0) return next({
        statusCode: 400, 
        message: 'body cannot be empty'
    })
    const id = Number(request.params.id);
    if(isNaN(id)) return next({ statusCode: 400, message: 'ID must be a number'});
    const todo = database.find((todo) => {return todo.id == id;});
    if (!todo) return next({
        statusCode: 404,
        message: `Todo item does not exist with id ${id}`
    });
    if (request.body.title) todo.title = request.body.title;
    if (request.body.desc) todo.desc = request.body.desc;
    if (request.body.categories) todo.categories = request.body.categories;
    if (request.body.status) todo.status = request.body.status;

    response.status(200).json(todo);
});

router.delete('/delete/:id', (request, response, next) => {
    const id = Number(request.params.id);

    if(isNaN(id)) return next({ statusCode: 400, message: 'ID must be a number'});

    const todoIndex = database.findIndex(function(todo) {
        return todo.id == id;
    });
    if (todoIndex == -1) return next({
        statusCode: 404,
        message: `Todo item does not exist with id ${id}`
    });

    database.splice(todoIndex, 1);
    response.status(200)
        .send('Todo deleted successfully');
});

module.exports = router;