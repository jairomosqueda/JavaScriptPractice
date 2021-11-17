//Excersice Link ----> https://github.com/generation-org/JS/tree/master/JS-02%20-%20Declare%20and%20Use%20Functions

//Excersice 1

function MonthlyPayments(Payment){

    let Interest = Payment * 0.01 ,Total = Payment + 3 + Interest
    return  Total ;
}

var Payment = parseInt(prompt("Please enter the amount of your transaction: "));
alert(`You need to pay ${MonthlyPayments(Payment)} dls for your entered amoutn. \n Tax = 3 dls \n Interest = 0.1%`);

//Excersice 2 
//Part 1
let names = {
    person1: window.prompt("Enter the first name: "),
    person2: window.prompt("Enter the second name: "), 
    person3: window.prompt("Enter the third name: ")
}

alert(`Greetings! \nWelcome ${names.person1}, ${names.person2} and ${names.person3}`);

//Part 2
let BornDates = {
    date1: parseInt(prompt(`Please enter ${names.person1}´s born age: `)), 
    date2: parseInt(prompt(`Please enter ${names.person2}´s born age: `)),
    date3: parseInt(prompt(`Please enter ${names.person3}´s born age: `))
}
function birth(born){
    let age = 2021 - born;
    return age ;
}

//Part 3
function DisplayInfo(){

    alert(`Welcome ${names.person1}, you are ${birth(BornDates.date1)} yrs old \nWelcome ${names.person2}, you are ${birth(BornDates.date2)} yrs old \nWelcome ${names.person3}, you are ${birth(BornDates.date3)} yrs old`)
} 

DisplayInfo();

//CHALLENGE YOURSELF
//Part 1, 2 and 3

var score = parseInt(prompt("Please enter the grade (0 - 11); "))

function GradeEvaluation(Grade){
    if(Grade <= 5){
        var Approved = false;
        alert(`You need to study more :( `)
    }else if (Grade < 8 && Grade >= 5){
        var Approved = true;
        alert(`Congrats! You passed :P`);
    }else if (Grade >= 8 && Grade < 11){
        var Approved = true;
        alert(`Well done! Excellent Job :) `);
    }else if(Grade === 11){
        var Approved = true;
        alert(`OMG! Your score is PERFECT :o `);
    }else {
        alert(`Please enter a grade betwen 0 and 11`)
    }

    return alert(`Approved Status: ${Approved}`);
}

GradeEvaluation(score);