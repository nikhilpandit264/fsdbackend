const fs = require('fs');

const write=()=>{
    const data = "I am new data of P5";

    fs.writeFile('./data.txt',data,(err)=>{
        if(err)
            console.log(err);
        else
        console.log(data)
    })

}
// console.log("i am before reading")
write();
// console.log("i am after reading")