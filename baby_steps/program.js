var args = process.argv.splice(2)
var sum = 0
for(var i = 0; i < args.length; i++){
	sum += parseInt(args[i])
	if (i == args.length - 1) console.log(sum) 
}