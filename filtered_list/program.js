var fs = require('fs')
var path = process.argv[2]
var fileType = process.argv[3]

fs.readdir(path, function(e, list){
	if (e) throw e
	for(var a in list){
		if (list[a].includes('.' + fileType)) console.log(list[a])
	}
})