var http = require('http')
var bl = require('bl')  
var args = process.argv.splice(2)

var responseStore = []

var getEm = function(i, end){
	http.get(args[i], function(response){
		response.on('error', console.error)
		response.pipe(bl((err, data) => {
            if (err) 
            	return console.error(err)
            responseStore.push(data.toString('utf8'))
        }))
		response.on('end', function(){
	        i++
	        if (i < end) 
	        	getEm(i, end)
	    	else for (var a in responseStore){
	    		console.log(responseStore[a])
	    	}
	    })
	})
}


getEm(0, args.length)