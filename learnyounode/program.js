var http = require("http")
var url = process.argv[2]


http.get(url, function(response){
	var toPrint = ""
	var count = 0
	response.on("data", function(data){
		count += data.toString().length
		toPrint = toPrint.concat(data.toString())
	})
	response.on("end", function(){
		console.log(count)
		console.log(toPrint)
	})

})
