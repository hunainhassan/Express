let exp = require("express")
let r = exp.Router();
let cont = require("../logic/functions");

r.get("/" , cont.Home)
r.get("/c" , cont.Contact)
r.get("/f" , cont.Feedback)
r.get("/h" , cont.Help)
r.get("/f" , cont.Faqs)
r.get("/p" , cont.PrivacyPolicy)

module.exports=r;

