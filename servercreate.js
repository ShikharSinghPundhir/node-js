const h = require('http')
//console.log(h)
const server =h.createServer(function(req,res){
    res.write(' welcome node js server ')
    res.write(' thank you bro')
    res.write('jod')
    res.end()

}).listen(1714,()=>console.log(' server is running localhost:1714 '))