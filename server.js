const http = require("http")
const fs = require("fs")
const request = require('request')
const { JSDOM } = require('jsdom')

const server = http.createServer(async (req,re)=>{
  const fetch = require("node-fetch")
  const json = await fetch('https://api.github.com/users/kazutotakeuchi-32')
	.then(res => res.json())
   await request(json.html_url,(e,res,body)=>{
    re.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    re.write(body);
    re.end()
    const dom = new JSDOM(body)
    console.log(dom.window.document.querySelector("h1").textContent.trim());
  })
  // re.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  // re.write(`<a href=${json.html_url}>Hello World</a>`);
  // const a= document.querySelector("a")
  // fs.readFile('index.html','utf8',(error,data)=>{
  //   res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  //   res.clwrite(data)
    // res.end();
  // })
  // res.end(JSON.stringify({ 'foo': 'bar' }));
})

const port = 4000
server.listen(port)
console.log(`localhost:${port}`);
