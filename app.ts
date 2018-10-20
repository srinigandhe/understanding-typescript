let newName: any = 'Srini';
let age: number = 35;
console.log(newName, age);
function getName(): string {
    return newName;
}
function getAge(): number {
    return age;
}
function doNothing(): void {
    console.log('Do nothing');
    // return statement will throw error
}
console.log(getName(), getAge());

function multiply(x: number, y: number): number {
    return x * y;
}

console.log(multiply(5, 4)); // 20

let myFunc; // implicitly ANY type of function
myFunc = doNothing;
myFunc(); // Do nothing
myFunc = multiply;
console.log(myFunc(5, 5));

let myNewFunc: ((a: number, b: number) => number);

// myNewFunc = doNothing; // Error:(30, 1) TS2322: Type '() => void' is not assignable to type '(a: number, b: number) => number'. Type 'void' is not assignable to type 'number'.
myNewFunc = multiply; // No error;

console.log(myNewFunc(6, 6));

// Union Types

let myRealAge: number | string;

myRealAge = 25;
console.log(myRealAge);
myRealAge = '25';
console.log(myRealAge);


