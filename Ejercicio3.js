//Excersice Link ----> https://github.com/generation-org/JS/tree/master/JS-03%20-%20Control%20Flow

function businessHours(dayNumber, hourNumber){

    let openTime = dayNumber <= 5 && dayNumber >= 1 && hourNumber <= 1800 && hourNumber >= 0900 ? true : false ;  //Ternary conditional structure 
    
    return openTime;
}

var day = parseInt(prompt("Please enter todays day been Monday = 1 and Sunday = 7: "));
var hour = parseInt(prompt("Please enter actual hour in 24 hour format and with 4 digits:\nExample: 1700"));

if(businessHours(day, hour) == true){ //Regular conditional structure
    alert("It is open time");
}else{
    alert("It is NOT open time");
}


function getDayNumber(janFirstDayNumber, yearDayNumber){

}