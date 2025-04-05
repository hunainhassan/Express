let expr=require("express");
let ro = require("./route/routes")
require("dotenv").config();

let myapp = expr()

myapp.use("/",ro);
Db().then(()=>{
    myapp.listen(process.env.PORT,()=>{
        console.log(`server started At http://localhost:${process.env.PORT}`)
    })
}).catch((e)=>{
    console.log(e)
})