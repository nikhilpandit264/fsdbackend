const { read } = require('fs');
const http = require('http');
const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-type','text/html');
    res.end(`<h1 style='background-color:red; color:white;'>Nikhil Chaturvedi </h1>`)

})

server.listen(9000,()=>{
    console.log("Server is runnig on 9000")
})