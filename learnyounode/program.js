var http = require('http')
var map = require('through2-map')

var port = process.argv[2]

var upperCase = map(function (chunk) {
 return chunk.toString().toUpperCase()
})

http.createServer(function(req, res){
  if (req.method == 'POST'){
    req.pipe(upperCase).pipe(res)
  }
}).listen(port)
