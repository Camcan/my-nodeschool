
var port = process.argv[2]



console.log(port)
var net = require('net')
var server = net.createServer(
  function (socket) {
   var date = new Date()
   date = [
     date.getFullYear(),
     date.getMonth()+1,
     date.getDate(),
     date.getHours(),
     date.getMinutes(),
   ]

   date = date.map(function(num){
     if (num.toString().length == 1){
       return "0"+ num
     } else {
       return num
     }
   })

   var dateTime =  date[0] + "-" + date[1] + "-" + date[2] + " " + date[3] + ":" + date[4]
   socket.end(dateTime)

  }
)
server.listen(port)
