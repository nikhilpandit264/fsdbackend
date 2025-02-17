const fs = require('fs');

const append=()=>{
    const data = "I am new data of P5";

    fs.appendFile('./data.txt',data,(err)=>{
        if(err)
            console.log(err);
        else
        console.log(data)
    })

}
append();