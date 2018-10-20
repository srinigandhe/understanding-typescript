let obj = {
    name: 'Srini',
    age: 33
}; // With this code implicit type casting is created as { name: string, age: number}

// obj = {}; // Error:(6, 1) TS2322: Type '{}' is not assignable to type '{ name: string; age: number; }'. Property 'name' is missing in type '{}'.

// obj = { a:'Gandhe', b: 34 }; // Error:(8, 9) TS2322: Type '{ a: string; b: number; }' is not assignable to type '{ name: string; age: number; }'. Object literal may only specify known properties, and 'a' does not exist in type '{ name: string; age: number; }'.

console.log(obj);


// Define object types

let newObj: { name: string, age: number} = {
    name: 'Srini',
    age: 33
}
console.log(newObj);


let complexObj: { data: number[], callback: (flag: boolean) => number[] } = {
    data: [2, 4, 6],
    callback: function(flag: boolean) {
        return this.data;
    }
};
console.log(complexObj);


// DEFINING REUSABLE TYPES with the keyword 'type'

type Complex = { data: number[], callback: (flag: boolean) => number[] };

let complexObj2: Complex = {
    data: [45, 55, 44],
    callback: function (flag: boolean) {
        return this.data;
    }
};

console.log(complexObj2);



