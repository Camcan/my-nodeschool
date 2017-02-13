var http = require('http')
var bl = require('bl')  
var args = process.argv.splice(2)


http.get(args[0], function(response){
	var toPrint = ""
	response.on('error', console.error)
		response.pipe(bl(function (err, data) { 
			toPrint += data.toString()
		})) 
	response.on('end', function(){
		console.log(toPrint.length) 
		console.log(toPrint)
	})
	
})