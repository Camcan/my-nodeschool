var fs = require('fs')

module.exports = function search(path, ext, callback) {
	var result = []
	fs.readdir(path, function(err, list){
		if (err) return callback(err, null)
		for(var a in list){
			if (list[a].includes('.' + ext)){
				result.push(list[a])
			}
			if (a == list.length-1){
				callback(null, result)
			}
		}
	})
}