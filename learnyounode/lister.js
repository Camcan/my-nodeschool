var fs = require('fs')
var path = require('path')

module.exports =  function(dir_path, extension, callback){
	fs.readdir(dir_path, function(err, files){
		if (err) {return callback(err, [])}
		var toReturn = files.filter(function(file_name){
			return path.extname(file_name) == "." + extension
		})
			callback(err, toReturn) 		
	})
}  