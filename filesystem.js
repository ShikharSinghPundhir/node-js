const fs=require('fs')
//console.log(fs)
// fs.readFile(__dirname+"/pn.txt",(data)=>{
//     console.log(data)
// })
// fs.readFile(__dirname+"/pn.txt","utf8",(err,data)=>{   //utf8 file format hota //callback es6
//     if(err) throw err;
//     console.log(data);

// });
// console.log('hello')


try{
    const data =fs.readFileSync(__dirname+"/pn.txt","utf-8");
    console.log(data);
}
catch(err){
console.log(err)
}
console.log('hello')