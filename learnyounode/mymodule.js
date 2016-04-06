module.exports = function(address){

  var http = require('http')
  var bl= require('bl')

  http.get(address, function(response) {
    response.pipe(bl(function(err, data){
      var fileString = data.toString()
      console.log(fileString.length)
      console.log(fileString)
    }))
    response.on('error', function(error){
      callback(error, null)
    }
  )}
  )
}
