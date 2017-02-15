var http = require('http')
var map = require('through2-map')  
var args = process.argv.splice(2)

var server = http.createServer(function(req, res){
	if (req.method == 'POST') {
		req.pipe(map(function (chunk) {  
       		return chunk.toString().toUpperCase()  
     	})).pipe(res)  
		res.writeHead(200)
	}
})
server.listen(args[0])