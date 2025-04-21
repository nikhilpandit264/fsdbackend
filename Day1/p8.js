const fs = require('fs');
const del=()=>{
    fs.unlink('./mkdir/data.txt',(err)=>{
        if(err)
            console.log(err);
        else
        console.log(data)
    })
}
del();
