var runFilter = require('./mymodule.js')
var filterValue = process.argv[3]
var path = process.argv[2]

var printArray = function(err, arr){
  if (arr){
    for (var i = 0; i < arr.length; i++){
      console.log(arr[i])
    }
  }
  if (err){
    console.log(err)
  }
}
runFilter(path, filterValue, printArray)


