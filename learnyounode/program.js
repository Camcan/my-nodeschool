var fs = require('fs')

var fileString = fs.readFileSync(process.argv[2]).toString()

function sumNewLines(string){
  var sum = string.split('\n').length - 1
  console.log(sum)
}

sumNewLines(fileString)

