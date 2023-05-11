require("dotenv").config();
const mongoose = require('mongoose');

const connecttoDB = async ()=>{
    mongoose.connect("process.env.MONGO_KEY")
    .then((conn)=>{
        console.log("DB Connected");
    })
    .catch((err)=>{
        console.log(err);
    })
}


module.exports = connecttoDB;