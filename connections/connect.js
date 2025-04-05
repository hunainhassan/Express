let mongodb= require('mongoose');
require("dotenv").config()

mongodb.connect("mongodb+srv://hunainhassan247:hunain123@cluster0.0wnll.mongodb.net/").then(()=>{
    console.log("connected to database")
}).catch((e)=>{
    console.log(e)
})