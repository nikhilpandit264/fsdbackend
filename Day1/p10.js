const fs = require('fs')
fs.rmdir("mkdir",(err)=>{
    if(err){
        console.log("Error deleting directory:",err);
    }
    else{
        console.log("Directory deleted successfully ");
    }
})