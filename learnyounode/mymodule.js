module.exports = function(dir, ext, callback){
  var fs = require('fs')
  var filterList = function(list){
    var toReturn = []
    for (var i = 0; i < list.length; i++) {
      if (list[i].indexOf("." + ext) > -1) {
        toReturn.push(list[i])
      }
    }
    return toReturn
  }
  fs.readdir(dir, function(err, result) {
      if (result) {
       callback(null, filterList(result))
      }
      if (err) {
        callback(err)
      }
    }
  )
}
