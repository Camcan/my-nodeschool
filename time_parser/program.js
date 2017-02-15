var http = require('http') 
var url = require('url') 
var args = process.argv.splice(2)

function parseUrl(req){
	return url.parse(req.url, true)
}  


var server = http.Server((req, res)=> {
	var url = parseUrl(req)
	console.log("I live")
	console.log("I URL", url)
	if (req.method == "GET"){
			console.log("I POST")
		if (url.pathname == '/api/parsetime'){
			console.log("HIT API")
			var date =	new Date(url.query.iso) 
			console.log("hours:", date.getHours())
			date = { 
				hour: date.getHours(),
				minute: date.getMinutes(),
				second: date.getSeconds() 
			}
			console.log(date)
			res.writeHead(200, { 'Content-Type': 'application/json' }) 
			res.write(JSON.stringify(date))
			res.end()
		} else if (url.pathname == '/api/unixtime'){
			console.log("HIT:", url)
			res.write(JSON.stringify({unixtime: Date.parse(url.query.iso)}))
			res.end()
		}
	}
})
// (req, res)=> {  
//    var time = new Date()
//    var yyyy = leftPad(time.getFullYear(), 4)
//    var mm = leftPad( (time.getMonth()+1) , 2)
//    var dd = leftPad(time.getDate(), 2)
//    var hh = leftPad(time.getHours(), 2)
//    var min = leftPad(time.getMinutes(), 2)
//    var timeStr = [yyyy, "-", mm, "-", dd, " ", hh, ":", min, "\n"].join("")
//    req.get()
//    socket.write(timeStr)
//    socket.end()
 // })  
 server.listen(args[0])  
