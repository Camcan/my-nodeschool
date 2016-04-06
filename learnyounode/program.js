var fs = require('fs')
var filter = process.argv[3].toString()

function filterFiles(err, list){
  if (list) {
    var getResults = function(){
      for (var i = 0; i < list.length; i++) {
        if (list[i].indexOf("." + filter) > -1) {
          console.log(list[i])
        }
      }
    }

    getResults()

  }
  if (err) {
    throw err
  }
}

fs.readdir(process.argv[2], filterFiles)

