var Filter = require('./filter.js')

var path = process.argv[2]
var name = process.argv[3]


Filter(path, name, function(e, result){
	if (e) throw e
	for (var a in result) console.log(result[a])
})