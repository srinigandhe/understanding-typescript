let arr: [string, number];

arr = ['Hello World', 35];
// arr = [35, 'Hello world']; // Error

enum Color {
    Grey,
    Green,
    Blue,
    Custom = 100,
    NewCustom
}

let blueColor: Color = Color.Blue;
let greyColor: Color = Color.Grey;
let greenColor: Color = Color.Green;
console.log(blueColor); // 2 => it works like index [0, 1, 2]
console.log(greyColor); // 0 => it works like index [0, 1, 2]
console.log(greenColor); // 1 => it works like index [0, 1, 2]
let customColor: Color = Color.Custom;
console.log(customColor); // 100
let newCustomColor: Color = Color.NewCustom;
console.log(newCustomColor); // iterates from prev. num => 101
