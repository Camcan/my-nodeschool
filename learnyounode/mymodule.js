module.exports = function(address, callback){

  var http = require('http')


  http.get(address, function(response) {
    response.setEncoding('utf8')
    response.on('data', function(data){
       callback(null, data)
    }
  )}
  )
}
