var http = require('http')

var args = process.argv.splice(2)

http.get(args[0], function(response){
response.setEncoding('utf8')
	response.on('error',console.error)
	response.on('data', console.log)	
}).on('error', console.error)