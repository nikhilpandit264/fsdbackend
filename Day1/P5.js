const fs = require('fs');

const write=()=>{
    const data = "I am new data of P5";

    fs.writeFile('./mkdir/data.txt',data,(err)=>{
        if(err)
            console.log(err);
        else
        console.log(data)
    })

}
write();
