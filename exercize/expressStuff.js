const express = require('express');
const morgan = require('morgan');

const port = 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.static(`public`));

app.get('/', (req, res) => res.send('Hello, my name is JH!'));
let names = ['JH', 'Chris', 'Rhys', 'Dale', 'Bob'];

app.get('/getAll', (req, res) => res.send(names));
app.get('/get/:id', (req, res) => res.send(names[req.params.id]));

app.get('/delete/:id', (req, res) => {
    res.send(names.splice(req.params.id, 1));
});
  
app.use(express.json());

app.post('/create', (req, res) => {
    const name = req.body.name;
    names.push(name);
    res.status(201).send(`${name} added successfully`);
});

app.put('/replace/:name', (req, res) => console.log('replace'));
app.patch('/update/:name', (req, res) => console.log('update'));
app.delete('/delete/:name', (req, res) => console.log('delete'));

app.get('/boon', (req, res) => {
    res.send('<h1>Hello world</h1>');
    //res.send('<p><img src="boon.jpg"></p>');
    
});



app.get('/', (req, res) => {
res.send('Hello world');
//res.send('<img src="boon.jpg">');

});

app.get('/index', (req, res) => {
    res.send('Hello world index');
    
});

app.get('/about', (req, res) => {
    res.send('Hello world about ');
        
});

const server = app.listen(port, () => {
console.log(`Server up on ${server.address().address}:${port}`);

});