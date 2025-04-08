let ali = require("mongoose");


let personal_collection = ali.Schema({
    height:{
       type:Number, required:true
    },
    weight:{
        type:Number, required:true
     },
     BMI:{
        type:Number, required:true
     },
     category:{
        type:String, required:true
     },
     created_at:{
        type:Date, default:Date.now
     },
    
})
module.exports = ali.model("personal_Record", personal_collection);