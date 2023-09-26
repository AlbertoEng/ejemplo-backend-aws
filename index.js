const express = require('express')
const app = express();


app.get('/', ( req, res)=>{
    res.end('<h1>Hola desde el backend</h1>')
})

app.listen(3000, ()=>{
    console.log('Escuchando en puerto 3000')
})