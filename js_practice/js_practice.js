// Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }

  // Simple JavaScript console.log statement
function printHello();

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  }

  console.log(addition(4, 5));

  // Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }

  console.log(doubleAddition(65,34));

  // Simple JavaScript log statement
function printHello() {
    return "Hello there!";
  }

  //Simplify with fat arrow
  printHello = () => "Hello there!";

  // Original addition function
function addition(a, b) {
    return a + b;
  }

  // Converted to an arrow function
addition = (a, b) => a + b;

// Original doubleAddition function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }

  //Refactored with fat arrows
  doubleAddition = (c, d) => addition(c, d) * 2;

  //Practice for loops
  let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

  function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }
//print friends
 console.log(listLoop(friends));

 //For loop with veggies
 var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

 for (var i = 0; i < vegetables.length; i++) {
     console.log("I love " + vegetables[i]);
 }

 //Loop through numbers without an array
 for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
 }

 // if-statement syntax
if ( condition ) { code to execute }

// pseudocode practice
if (a date is entered) {
    Filter the default data to show only the date entered
};