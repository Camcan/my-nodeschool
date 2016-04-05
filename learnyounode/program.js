var numbers = process.argv

function outputSum(array){
  var sum = 0
  for (n=2; n < array.length; n++) {
    sum += parseInt(array[n])
  }
  console.log(sum)
}

outputSum(numbers)

