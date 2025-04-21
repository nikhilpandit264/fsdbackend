const http =require('http');
const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-type','text/plain');
    res.end("hello")
})

server.listen(9000,()=>{
    console.log(" Server is runing on port 9000")
})