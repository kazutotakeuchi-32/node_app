const http = require("http")
const fs = require("fs")


const server = http.createServer(async (req,res)=>{

  const fetch = require("node-fetch")
  const json = await fetch('https://api.github.com/users/kazutotakeuchi-32')
	.then(res => res.json())
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write(`<a href=${json.html_url}>Hello World</a>`);
  const a= document.querySelector("a")
  // fs.readFile('index.html','utf8',(error,data)=>{
  //   res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  //   res.write(data)
  //   res.end();
  // })
  // res.end(JSON.stringify({ 'foo': 'bar' }));
})

const port = 4000
server.listen(port)
console.log(`localhost:${port}`);
