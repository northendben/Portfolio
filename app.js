//global vars and imports
if(process.env.NODE_env !=="production"){
    require('dotenv').config()
}
const express = require('express')
const app = express()
const path = require('path')
const ejsMate = require('ejs-mate')
const securityHelmet = require('helmet')
const favicon = require('serve-favicon')
const mainRoutes = require('./routes/home')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, '/static')))
app.use('', mainRoutes)
// app.use(favicon(__dirname + '/static/images/favicon.ico'))
//todo: define CSP and use helmet
app.engine('ejs', ejsMate)


app.listen(3030, () =>{
    console.log('Listening on the Port 3030.')
})
