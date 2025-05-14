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

app.get('/todos', (req, res) => {
    // 第二個參數可傳入資料
    res.render('todos', {
        todos     // todos: todos 一樣的話可省略寫法
    })
})

app.get('/todos/:id', (req, res) => {
  // params: 可拿到網址列上指定的參數
    const id = req.params.id
    const todo = todos[id]
    res.render('todo', {
        todo,
    })
})

app.listen(port, () => {
    console.log(`Esample app listening on port ${port}!!!`)
})

