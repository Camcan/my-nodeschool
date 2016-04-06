var getReq = require('./mymodule.js')
var addresses = [process.argv[2], process.argv[3], process.argv[4]]
for (var i = 0; i < addresses.length; i++){
  getReq(addresses[i])
}


