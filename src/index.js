const express = require('express');
const path = require('path')
const app=express();
const morgan = require('morgan');
const mysql= require('mysql');
const myConnection=require('express-myconnection')
//Configuración
app.set('port', process.env.PORTǀǀ3000);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
//middlewares
app.use(morgan('dev'));
app.listen(app.get('port'),()=>{
    console.log('Server on port 3000');
})