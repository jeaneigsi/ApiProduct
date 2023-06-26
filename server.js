const express = require('express');
const app = express();

//routes

app.get('/', (req, res)=>{
    res.send('Hello Node Api run')
})

app.listen(3000,()=>{
    console.log(`Node server is running on port 3000`)
})