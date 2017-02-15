var http = require('http')
var fs = require('fs')
var args = process.argv.splice(2)
var server = http.createServer(function(req, res){
	res.writeHead(200)
	fs.createReadStream(args[1]).pipe(res)
})
server.listen(args[0])