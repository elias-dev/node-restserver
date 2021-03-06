const config = require('./config/config')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//app.use(config.allowCrossDomain)
app.use(require('./routes/index'))



mongoose.connect(process.env.URLDB, config.optConnectMongoose , (err,res)=>{
    if (err) throw err
    console.log('Base de datos ONLINE');
    

});


app.listen(process.env.PORT, ()=>{console.log('Escuchando el puerto', process.env.PORT)})