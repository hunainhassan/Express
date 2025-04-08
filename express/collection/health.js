let aiman = require("mongoose");


let health_collection = aiman.Schema({
    Bp:{
       type:Number, required:true
    },
    suger:{
        type:Number, required:true
     },
     heart_rate:{
        type:Number, required:true
     },
     colestrol:{
        type:Number, required:true
     },
     created_at:{
        type:Date, default:Date.now
     },
})

module.exports = aiman.model("health", health_collection);