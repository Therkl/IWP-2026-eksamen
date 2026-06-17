/*
Reversing an array exercise.
*/

function reverseArray(array)
{
    let reversedArray = [];

    for(let n = array.length-1; n >= 0; n--)
    {
        reversedArray.push(array[n]);
    }

    return reversedArray;
}

function reverseArrayInPlace(array)
{
    const arrayLength = array.length-1;

    let temp = null;

    for(let i = 0; i <= Math.floor(arrayLength/2); i++)
    {
        temp = array[i];
        array[i] = array[arrayLength-i];
        array[arrayLength-i] = temp;
    }
}

// Test cases

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]