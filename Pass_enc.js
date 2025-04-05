let bcrypt = require('bcryptjs')
let mypswd = "hunainhassan"
let salt=12;
let encrypted_pswd= bcrypt.hashSync(mypswd,salt);
let check = bcrypt.compareSync(mypswd,encrypted_pswd);
if(check){
    console.log("Password is correct");
}else{
    console.log("Password is not incorrect");
}
console.log(`Original Password: ${mypswd}\n Encrypted Password: ${encrypted_pswd}`);