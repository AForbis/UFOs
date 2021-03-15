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