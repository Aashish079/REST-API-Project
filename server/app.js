const express = require('express');

const app = express();

app.get('/',(req, res)=>{
    res.json({
        success : true,
        message : "Aashish Karki",
        marks : "620 / 650",
    })

} )

module.exports = app;

