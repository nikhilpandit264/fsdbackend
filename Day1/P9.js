const fs = require('fs')
fs.mkdir("mkdir",(err)=>{
    if(err){
        console.error("Error creating directory:",err);
        return;
    }
    console.log("Directory created Successfully");
})