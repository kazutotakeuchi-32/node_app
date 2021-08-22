const http = require("http")
const fs = require("fs")
const Router = require("router")

// const fetch = require("node-fetch")
// fetch('https://api.github.com/users/github')
// 	.then(res => res.json())
// 	.then(json => console.log(json));

const server = http.createServer((req,res)=>{

  // res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  // res.write('<h1>Hello World</h1>');
  // fs.readFile('index.html','utf8',(error,data)=>{
  //   res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  //   res.write(data)
    // res.end();
  // })
  res.end(JSON.stringify({ 'foo': 'bar' }));
})

const port = 4000
server.listen(port)
console.log(`localhost:${port}`);
