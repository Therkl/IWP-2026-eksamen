/*
Then, define an array with integers: [5, 6, 9, 19, 42]

The task is to write a function which removes an element of the array and concatenates the resulting arrays together

*/

let numbers = [5, 6, 9, 19, 42];
let pivot = 2;

function concatArray(numbers, pivot)
{
    let firstHalf = numbers.slice(0, pivot);
    let secondHalf = numbers.slice(pivot+1);
    
    let combinedArray = firstHalf;
    //combinedArray.push(secondHalf);
    // Push elements individually
    //combinedArray.push(secondHalf[0]);
    //combinedArray.push(secondHalf[1]);
    //for(let index in secondHalf)
    for(let i = 0; i < secondHalf.length; i++)
    {
        console.log(secondHalf[i]);
        combinedArray.push(secondHalf[i]);
    }
    return combinedArray;
}

let result = concatArray(numbers, pivot);
console.log(result);