"use strict";
// Annotations
// Primitive Types
let company = 'ISBX';
let newDevelopers = 3;
let hasCompleted = true;
let nothingMuch = null;
let nothing = undefined;
let currentDate = new Date();
// Objects
let computer = ['Monitor', 'Keyboard', 'Mouse', 'Speaker'];
let oddNumbers = [1, 3, 5, 7, 9, 11];
let truths = [true, false, true, true, false];
class Car {
}
let wigo = new Car();
let dog = {
    name: 'Browny',
    color: 'brown',
    breed: 'bulldog',
    age: 3,
};
// any
let showNumber = (i) => {
    return i;
};
let getNumber = showNumber(123);
// never
let showLetter = (i) => {
    //   throw new Error('Hindi ito letter!');
};
showLetter('abc');
// void
let checkMessage = (message) => {
    console.log(message);
};
let myMessage = checkMessage('Hello, kamusta ka na!');
console.log(myMessage);
