require("dotenv").config();
const mongoose = require('mongoose');

const connecttoDB = async ()=>{
    mongoose.connect("mongodb+srv://developeraashish079:vinayak10@cluster0.0an5h0k.mongodb.net/test")
    .then((conn)=>{
        console.log("DB Connected");
    })
    .catch((err)=>{
        console.log(err);
    })
}


module.exports = connecttoDB;