// var massage="";
// console.log(global.massage)
//console.log(module);
// var logger= require('./logger');
// //console.log(logger)
// logger.log('message')

// console.log(__filename);
// console.log(__dirname);
// var url='http://mylogger.io/log'
// function log(message){
//     console.log("message")
// }
// module.exports=log;
// const path=require('path');
//  var pathObj=path.parse(__filename);
//  console.log(pathObj)

// const os=require('os');
// var totalmemeory= os.totalmem();
// var freememory=os.freemem();
// // console.log('total memeory '+totalmemeory);
// // console.log('free memory ' + freememory);
// console.log(`total memory ${totalmemeory}`);
// console.log(`free memory ${freememory}`);

// const fs= require('fs');
// //  const files= fs.readdirSync('./');
// //  console.log(files);
//  fs.readdir('./',(err,files)=>{
//     if(err) console.log('Error',err)
//         else console.log('Result',files)
//  });

// const EvntEmitter = require('events');
// const emitter = new EvntEmitter();
// const Logger = require('./logger');
// const logger = new Logger();

// emitter.on('messegelogged', (e) => {
//   console.log('Listener called', e);
// });

// logger.log('message');

// const { Socket } = require('dgram');
// const http = require('http')
// const server= http.createServer((req,res)=>{
//   console.log("hii")
//   if (req=='/'){
//     res.write('hellow world')
//     req.end();
//   }
// });
// server.listen(3000)
// console.log('litsening on port 3000...')

// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log("Received a request");

//   if (req.url === '/') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write('Hello World');
//     res.end();
//   } 
//   else if (req.url === '/api/course') {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.write(JSON.stringify([1, 2, 3]));
//     res.end();
//   }
//   else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.write('Not Found');
//     res.end();
//   }
// });

// server.listen(3000, () => {
//   console.log('Listening on port 3000...');
// });
