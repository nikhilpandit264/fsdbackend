const express=require('express');
const app=express();
app.use(express.json());
const users=[];
app.get('/api',(req,res)=>{
    res.json(users);
})
app.get('/users',(req,res)=>{
    res.send('welcome to backend server');
});
app.post('/users',(req,res)=>{
    const data=req.body;
    const newId =users.length>0?users[users.length-1].id+1:1;
    data.id= newId;
    users.push(data);
    res.json({message:'data received',data:data});
    console.log(data);
})
app.listen(9000,()=>{
    console.log('server running on port 9000');
});