var fs = require('fs')


function sumNewLines(err, data){
  if (data) {
    var sum = data.toString().split('\n').length - 1
    console.log(sum)
  }
  if (err) {
    throw err
  }

}
fs.readFile(process.argv[2], sumNewLines)

