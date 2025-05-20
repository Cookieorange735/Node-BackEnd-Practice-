const express = require('express');

const app = express();

const port = 5001;

const MyList = [
    { CTM_map: 1, name: 'Ragecraft IV' },
    { CTM_map: 2, name: 'Ragecraft III' },
    { CTM_map: 3, name: 'Ragecraft II' },
]

const todos = [
  'first todo', 'second todo', 'third todo'
]

app.set('view engine', 'ejs'); // set view engine ejs

app.get('/', (req, res) => {
    res.send('index');
})

app.get('/test', (req, res) => {
    res.render('test');
})

app.get('/Mylist',(req, res) => {
    res.render('Mylist', {
        MyList: MyList,
    })
})

app.get('/hello', (req, res) => {
    res.render('hello');
})

const todoController = require('./controllers/todo')

app.get('/todos', todoController.getAll)

app.get('/todos/:id', todoController.get)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!!!`)
})

