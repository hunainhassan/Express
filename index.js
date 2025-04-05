require("dotenv").config()
let http_module = require("http");
let port_no = process.env.PORT 

http_module.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write("<h1>Hello World</h1>");
    res.end()


}).listen(port_no,()=>{
    console.log(`Server is running http://localhost${port_no}`)
})