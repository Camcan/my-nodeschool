var net = require('net')  
var args = process.argv.splice(2)
     
function leftPad(no, length){
	   var n = no.toString()
	   var toFill = length - n.length
	   	while (toFill >= 0){
	   		if (toFill == 0) {
	   			return n
	   		}
	   	 	toFill--
	   	 	n = '0' + n
	   }

}
var server = net.createServer(function (socket) {  
   var time = new Date()
   var yyyy = leftPad(time.getFullYear(), 4)
   var mm = leftPad( (time.getMonth()+1) , 2)
   var dd = leftPad(time.getDate(), 2)
   var hh = leftPad(time.getHours(), 2)
   var min = leftPad(time.getMinutes(), 2)
   var timeStr = [yyyy, "-", mm, "-", dd, " ", hh, ":", min, "\n"].join("")
     
   socket.write(timeStr)
   socket.end()
 })  
 server.listen(args[0])  
