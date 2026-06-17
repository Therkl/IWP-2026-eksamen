/*
We define an array with strings: ["Tesla", "BYD", "Mercedes"]

Use map to get an array with the lengths of the strings.
*/

let cars = ["Tesla", "BYD", "Mercedes"];

let lengths = cars.map( car => car.length );

console.log(lengths);