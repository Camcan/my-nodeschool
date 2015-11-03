var lister = require("./lister.js")


var dir_path = process.argv[2]
var ext = process.argv[3]

lister(dir_path, ext, function(err, files){
		if (err){console.log(err); 
			return
		}
		files.forEach(function(file){console.log(file)}) 
})


