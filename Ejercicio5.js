//Excersice Link ----> https://github.com/generation-org/JS/tree/master/JS-05%20-%20Operators%20and%20Expressions

//Part 1

var names = ["Maria", "Antony", "Joy", "Juan"];

var  myName = () => {
    
    names.push("Jairo");

    return names
}

console.log(myName())

//Part 2

searchedName = "Eduardo"
var findName = names.indexOf(searchedName), checkIfExists = () => findName > 0;

console.log(`${searchedName} existance in array = ${checkIfExists()}`)

