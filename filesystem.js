const fs=require('fs')
//console.log(fs)
fs.readFile(__dirname+"/pn.txt",(data)=>{
    console.log(data)
})
fs.readFile(__dirname+"/pn.txt","utf8",(err,data)=>{   //utf8 file format hota //callback es6
    if(err) throw err;
    console.log(data);

});