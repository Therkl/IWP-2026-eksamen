/*
Let’s look at how we define an array, 
access its elements 
and iterate over it

Also, access its properties

What about nested arrays?
*/

let array = [5, 6, 7, 8];

console.log(array);

let element = array[2]; // Access third element

console.log(element);

// Iterate over the array
for(let i = 0; i < array.length; i++)
{
    console.log(array[i]);
}

// Define a nested array
let nestedArray = [[5, 6], [7, 8]];

// Print the element "6":
console.log(nestedArray[0][1]);