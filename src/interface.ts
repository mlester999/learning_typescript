// Type Compatibility

interface Rectangle {
  color: string;
  corners: number;
}

interface Square {
  color: string;
  sideLength: number;
}

let rectangle: Rectangle = { color: 'red', corners: 4 };
let square: Square = { color: 'blue', sideLength: 10 };

let showShape = (shape: Rectangle) => {
  console.log(shape);
};

let myShape = showShape(rectangle);

// Type assertions
let valueGreetings: any = 'Hello World!';
let valueLength: number = (<string>valueGreetings).length;

console.log(valueLength);

// Interface vs Type

// Interface
interface PersonInterface {
  name: string;
  age: number;
}

interface EmployeeInterface extends PersonInterface {
  department: string;
}

const employeeInterface: EmployeeInterface = {
  name: 'John Doe',
  age: 30,
  department: 'Engineering',
};

// Type
type PersonType = {
  name: string;
  age: number;
};

type EmployeeType = PersonType & {
  department: string;
};

const employeeType: EmployeeType = {
  name: 'John Doe',
  age: 30,
  department: 'Engineering',
};
