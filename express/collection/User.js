let hunain = require("mongoose");


let user_collection = hunain.Schema({
    u_name:{
       type:String, required:true
    },
    u_email:{
        type:String, required:true
     },
     u_password:{
        type:String, required:true
     },
     u_address:{
        type:String, required:true
     },
     u_age:{
        type:Number, required:true
     },
     u_gender:{
        type:String, required:true
     },
     created_at:{
        type:Date, default:Date.now
     },
})
module.exports = hunain.model("User", user_collection);