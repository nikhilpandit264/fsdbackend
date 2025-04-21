const fs = require('fs/promises');
const write = async ()=> {
const data ="I am new data "
 fs.writeFile('./data.txt',data,(err)=>{
        if(err)
            console.log("Error writing data to a file");
        else
        console.log("file updated succesfully")
    })
}
write();