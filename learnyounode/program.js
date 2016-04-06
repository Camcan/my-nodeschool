var getReq = require('./mymodule.js')
var address = process.argv[2]

var printData = function(err, data){
  if (data){
      console.log(data)
  }
  if (err){
    console.log(err)
  }
}
getReq(address, printData)


