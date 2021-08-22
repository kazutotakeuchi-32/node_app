const http = require("http")
// const fetch = require("node-fetch")
// fetch('https://api.github.com/users/github')
// 	.then(res => res.json())
// 	.then(json => console.log(json));

const server = http.createServer((req,res)=>{
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello World</h1>');
  res.end();
})

const port = 4000
server.listen(port)
console.log(port);
