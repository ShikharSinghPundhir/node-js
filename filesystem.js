const fs=require('fs')
//console.log(fs)
fs.readFile(__dirname+"/pn.txt",(data)=>{
    console.log(data)
})