const http = require('http');
const fs = require('fs');
const url = require("url")

const index = fs.readFileSync("./views/index.html","UTF-8")
const subIndex = fs.readFileSync("./views/sub/index.html","UTF-8")
const other = fs.readFileSync("./views/other.html","UTF-8")
const styleCss = fs.readFileSync("./views/style.css","UTF-8")
const scriptJs = fs.readFileSync("./views/index.js","UTF-8")
// views/other.html

const server = http.createServer(RouteSetting)

const hostname = '127.0.0.1';
const port = 3000;

function RouteSetting(req,res) {
  console.log(req.url);
  switch (`${req.url}`) {
    case "/":
    case "/index.html"  :
      res.writeHead(200, {'Content-Type': "text/html"})
      res.write(index)
      res.end()
      break
    case "/other.html"  :
      res.writeHead(200, {'Content-Type': "text/html"})
      res.write(other)
      res.end()
      break
    case "/sub":
    case "/sub/index.html":
      res.writeHead(200, {'Content-Type': "text/html"})
      res.write(subIndex)
      res.end()
      break
    case "/style.css"  :
    case "/style/style.css":
      res.writeHead(200, {'Content-Type': "text/css"})
      res.write(styleCss)
      res.end()
      break
    case "/index.js"  :
      res.writeHead(200, {'Content-Type': "text/plain"})
      res.write(scriptJs)
      res.end()
      break
    default:
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.write('お探しのページは見つかりません。');
      res.end();
      break;
  }
}

// const server = http.createServer((req, res) => {
  // fs.readFile('./views/index.html', 'UTF-8',
  // (error, data) => {
  //   res.writeHead(200, {'Content-Type': 'text/html'});
  //   res.write(data);
  //   res.end();
  // });
// });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
