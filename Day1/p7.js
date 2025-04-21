const fs = require('fs');

const write=()=>{
    const data = "";

    fs.writeFile('./data.txt',data,(err)=>{
        if(err)
            console.log(err);
        else
        console.log(data)
    })

}
write();
