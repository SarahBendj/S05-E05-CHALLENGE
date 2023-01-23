const express = require('express')
const router = require('./router')
const app = express()

app.set( 'view engine' , 'ejs')
app.set('views' , 'views')

app.use(router)
app.listen(3000)