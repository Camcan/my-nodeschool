var http = require('http')
var url = require('url')
var map = require('through2-map')

var port = process.argv[2]

function getUnixTimestamp(string){
  return { unixtime: Date.parse(string) }
}

function timeObject(string) {
  var date = new Date(Date.parse(string));

  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}



var handleRequest = function(req, res){
  var urlObj = url.parse(req.url, true)
  var path = urlObj.pathname
  var timeString = urlObj.query.iso
  var toReturn = undefined
  if (path === '/api/unixtime'){
    toReturn = getUnixTimestamp(timeString)
  } else if (path === '/api/parsetime'){
    toReturn = timeObject(timeString)
  }
  if (toReturn) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(toReturn))
  } else {
    res.writeHead(404)
    res.end()
  }
}

http.createServer(handleRequest).listen(port)
