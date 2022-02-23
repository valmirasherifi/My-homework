//Homework 1 - Create a function called tellStory()
//let person = ["c", "sing", "singer"];
//document.getElementById("test").innerHTML= "This is" +""+ person[0]+"."+"She likes to"+" "+ person[1]+"."+"<br>"+"She is a"+" "+person[2]+".";
//function myFunction(c, singer, song) {
//console.log(test)}

// Homework 2 - Write a function that will take an array of 5 numbers as an argument and return the sum.
//Print it in the console or in alert
//BONUS: Write another function called validateNumber() that
//checks if a number is a valid number and call it for every number.
//If one of the numbers of the array is invalid show an error message instead of a result.

const numbers = [10, 10, 10, 10];
let sum = numbers.reduce(myFunction);
function myFunction(total, value, index, array) {
    return total + value;

}
console.log(myFunction);



