/*
Solution to exercise 2 from lecture 3.
*/

let array = ["HTML", "CSS", "JavaScript"];

function sortArray(array)
{
    let sortedArray = array.slice(); // Make a copy of the array
    
    return sortedArray.sort();
}

console.log(array);
let sortedArray = sortArray(array);
console.log(array);
console.log(sortedArray);