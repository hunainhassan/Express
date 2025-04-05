let mongodb= require('mongoose');
require("dotenv").config()

mongodb.connect(process.env.URL).then(()=>{
    console.log("connected to database")
}).catch((e)=>{
    console.log(e)
})