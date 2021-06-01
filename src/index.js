const express = require('express');
const app=express();
//Configuración
app.set('port', process.env.PORTǀǀ3000);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'))
app.listen(app.get('port'),()=>{
    console.log('Server on port 3000');
})