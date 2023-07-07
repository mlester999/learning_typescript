// Annotations

// Primitive Types

let company: string = 'ISBX';
let newDevelopers: number = 3;
let hasCompleted: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;
let currentDate: Date = new Date();

// Objects

let computer: string[] = ['Monitor', 'Keyboard', 'Mouse', 'Speaker'];
let oddNumbers: number[] = [1, 3, 5, 7, 9, 11];
let truths: boolean[] = [true, false, true, true, false];

class Car {}

let wigo: Car = new Car();

let dog: { name: string; color: string; breed: string; age: number } = {
  name: 'Browny',
  color: 'brown',
  breed: 'bulldog',
  age: 3,
};

// any
let showNumber = (i: number) => {
  return i;
};

let getNumber: number = showNumber(123);

// never
let showLetter = (i: string): void => {
  throw new Error('Hindi ito letter!');
};

showLetter('abc');

// void
let checkMessage = (message: string): void => {
  console.log(message);
};

let myMessage = checkMessage('Hello, kamusta ka na!');
