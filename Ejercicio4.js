//Excersice Link ----> https://github.com/generation-org/JS/tree/master/JS-04%20-%20Arrays%20and%20Loops
//Part 1
var names = ["Sofia", "David", "Juan"];
console.log(names);

//Part 2
names.push("Sara");
names.push("Agustin");

console.log(names);

//Part 3
names.splice(2, 0, "Renata");
names.push("Elena");

console.log(names);

//Excersice 2

    var dots = ["*"]
    for(var i = 0; i < 5; i++){  
        console.log(dots);
        dots.push("*");
    }

//Excersice 3
//1  Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time as long as xValue remains positive.
for(var xValue = 100; xValue >= 0; xValue -= 0.5){
    console.log(xValue)
}

//2 Print all the odd numbers between 1 - 100.
//FOR FORM
for(var i = 0; i <= 100; i += 2){
    console.log(i)
}
//DO WHILE FORM
var i = 0
do{
    i += 2
    console.log(i)

}while(i < 100)

//3 Write a method with a while loop to print 1 through n in square brackets. For example, if n = 6 print [1] [2] [3] [4] [5] [6]

// 4 - Write a method with a while loop that computes the sum of first n positive integers: 
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190 n = n + n - 1

var i = 0, n = 5, r = n
do{
     r += n - 1;

}while(i < n)

console.log(r)