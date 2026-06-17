/*
Exercise 3 from lecture 3: Flattening an array using reduce.
*/

let arrays = [[1, 2, 3], [4, 5], [6]];

// Your code here.

let flatArray = arrays.reduce( (combined, current) => (combined.concat(current)), []);

console.log(flatArray);
console.log(typeof flatArray);
// // → [1, 2, 3, 4, 5, 6]
