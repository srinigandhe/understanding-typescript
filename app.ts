/* IMPLICIT TYPES if the variables are defined at the same line */

let myName = 'Srini Gandhe';
// myName = 1; // Type 1 is not assignable to type 'string'
console.log(myName);

let age = 35;
// age = 'Thirty five'; // Type Thirty five is not assignable to type 'number'
age = 35.4; // Is fine
console.log(age);

let hasHobbies = true;
// hasHobbies = 0; // Type 0 is not assignable to type 'boolean'
console.log(hasHobbies);

let hobbies = ['Hello', 'World']; // This by default becomes : string[]
console.log(hobbies);
// hobbies = [1, 2]; // Type 'number' is not assignable to type 'string';

/* Without definition of variables */
let anyVar; // This will not complain as the type assign here is ANY, coz the variable is not defined
anyVar = 1;
console.log(anyVar);
anyVar = 'Hello';
console.log(anyVar);

/* EXPLICIT TYPES */

let myNewName: string = 'Srini';
let myExplicitAge: number = 10;
console.log(myNewName, myExplicitAge);

let arr: any[] = ['Hello', 'World'];
console.log(arr);
arr = [1, 2];
console.log(arr);




