//Excersice Link ----> https://github.com/generation-org/JS/tree/master/JS-01%20-%20Data%20Types%20and%20Variables

//Challenge 1
var Year = parseInt(prompt("Please enter your born year: ")), Future = parseInt(prompt("Please enter a future year: "));
var Result = Future - Year;
alert(`You will be ${Result} years old in ${Future}`);

//Challenge 2
var person1 = {
    name: "Jairo",
    lastName: "Mosqueda" ,
    age: 25,
    city: "Guadalajara",
};

alert(`Hi, my name is ${person1.name} ${person1.lastName}, I´m ${person1.age} years old and I am from ${person1.city} city`)