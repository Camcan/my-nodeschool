let http = require('http')

const args = process.argv.splice(2)

htto.get(args[0], function(e, response){
response.setEncoding('utf8')
	response.on('error', function(error){
		throw error
	})
	response.on('data', function('data'){
		console.log(data)
	})
	response.end(function(){

	})	
})