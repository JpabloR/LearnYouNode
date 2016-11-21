var array = process.argv
var sum = 0;
for (var index = 2; index < array.length; index++) {
    var element = +array[index];
    sum = sum + element;
}
console.log(sum);