var fs = require('fs')

var path = process.argv[2]

fs.readFile(path, function(e, data){
	if (e) throw e
	else console.log(data.toString().split('\n').length -1)
})

