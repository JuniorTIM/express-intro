const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/', (req, res) => {
    res.send('Hello World')
})
  
app.patch('/', (req, res) => {
    res.send('Hello World')
})

app.post('/users', (req, res) => {
    res.send("юзер добавлен")
})

app.delete('/users/:id', (req, res) => {
    res.json(`юзер с ID ${req.params.id} удален`)
})

app.patch('/users/:id', (req, res) => {
    res.json(`юзер с ID ${req.params.id} изменен`)
})

app.get('/admin', (req, res) => {
    res.send("не хватает прав доступа")
})

app.post('/admin', (req, res) => {
    res.send("не хватает прав доступа")
})

app.patch('/admin', (req, res) => {
    res.send("не хватает прав доступа")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})