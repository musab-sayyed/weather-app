const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
const staticPath = path.join(__dirname, '../public')

app.use(express.static(staticPath))

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.get('/', (req, res)=>{
    res.render('index')
})
app.get('/weather', (req, res)=>{
    res.render('weather')
})
app.get('/about', (req, res)=>{
    res.render('about')
})
app.get('*', (req, res)=>{
    res.render('404')
})

app.listen(port, '127.0.0.1', ()=>{
    console.log(`Server is listening at http://127.0.0.1:${port}`)
})