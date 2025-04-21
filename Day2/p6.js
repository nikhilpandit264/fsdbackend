const http = require("http");
const server = http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
   let data = {
    name :"nikhil chaturvedi",
    age:30
   }

   if(req.url ==="/getdata"&& req.method ==='GET'){
       res.end(JSON.stringify(data));
   }
   if(req.url ==="/getdata"&& req.method ==='POST'){
       res.end("data recieved");
   }
});

server.listen(9000,()=>{
    console.log("Server is runnig on 9000");
})