require('dotenv').config()
const express = require('express')
const hbs = require('hbs');
const app = express()
const port = process.env.PORT

//Handelbars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use( express.static('public'))

app.get('/',  (req, res) => {
    res.render('home', {
        titulo: 'Curso de Node',
        nombre: 'Fernando Herrera'
    })
})

app.get('/elements',  (req, res) => {
    res.render('elements', {
        titulo: 'Curso de Node',
        nombre: 'Fernando Herrera'
    })
})

app.get('/generic',  (req, res) => {
    res.render('generic', {
        titulo: 'Curso de Node',
        nombre: 'Fernando Herrera'
    })
})

app.get('/index',  (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/elements',  (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
})

app.get('/generic',  (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
})

app.get('*',  (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })