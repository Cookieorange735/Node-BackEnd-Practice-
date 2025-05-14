const express = require('express');

const app = express();

const port = 5001;

const todos = [
    'todo1', 'todo2', 'todo3'
];

app.set('view engine', 'ejs'); // set view engine ejs

app.get('/', (req, res) => {
    res.send('index');
})

app.get('/todos', (req, res) => {
    res.render('todos', {
        todos: todos,
    });
    res.render('What why')
})

app.get('/test', (req, res) => {
    res.render('test');
})


app.get('/hello', (req, res) => {
    res.render('hello');
})

app.get('/todos/:id', (req, res) => {
    const id = req.params.id
    const todo = todos[id]
    res.render('todo', {
        todo: todo,
    })
    res.render('What why')
})

app.listen(port, () => {
    console.log(`Esample app listening on port ${port}!!!`)
})

