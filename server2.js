const http = require("http")
const Router = require("router")
const finalhandler = require("finalhandler")
const bodyParser = require("body-parser")


function start() {
  let opts = { mergeParams: true }
  let router = Router(opts);
  let server = http.createServer(function onRequest(req, res) {
      router(req, res, finalhandler(req, res));
  });

  let user = Router(opts)
  router.use('/users/:path',user)

  user.get('/',function (req,res){
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.write(`<h1>Hello World</h1>`);
    res.end(req.params.path + '\n')
  })

  let users = Router();
  router.use("/users",users)
  users.use(bodyParser.json())

  users.post('/',(req,res)=> {
    console.log(req.body);
    if (req.body) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(`${req.body.value}`+'\n')
    } else {
       res.statusCode = 400
       res.setHeader('Content-Type', 'text/plain; charset=utf-8')
       res.end('Invalid API Syntax\n');
    }
  })

  server.listen(4000)
}

exports.start = start
