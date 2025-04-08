let expr=require("express");
let ro = require("./route/routes")
let user=require("./collection/User")
let healt=require("./collection/health")
let per=require("./collection/personal")

let Db=require("./connection")
require("dotenv").config();

let add_user = async function() {
    try{
        user.create({
           u_name :"hunain",
           u_email :"hunain@gmail.com",
           u_password:123,
           u_address:"block1",
           u_age:18,
           u_gender:"male"
        })
        console.log("data create succse")
    }catch(error){
        console.log(error)
    }
}


let add_health = async function() {
    try{
        healt.create({
            Bp :44,
            suger :443,
            heart_rate:123,
            colestrol  :435
          
        })
        console.log("data create succse")
    }catch(error){
        console.log(error)
    }
}

let add_person = async function() {
    try{
        per.create({
            height :88,
            weight :44,
            BMI:123,
            category:"hello",
          
        })
        console.log("data create succse")
    }catch(error){
        console.log(error)
    }
}

let myapp = expr()

myapp.use("/",ro);
Db().then(()=>{
    add_user();
    add_health();
    add_person();
    myapp.listen(process.env.PORT,()=>{
        console.log(`server started At http://localhost:${process.env.PORT}`)
    })
}).catch((e)=>{
    console.log(e)
})