require('dotenv').config();

const express = require('express');
const connecttoDB = require("./config/db")


const app = express();

connecttoDB();

app.get('/',(req, res)=>{
    res.json({
        success : true,
        message : "Aashish Karki",
        marks : "620 / 650",
    })

} )

module.exports = app;

