/*

Then, define an array with integers: 
[5, 6, 9, 19, 42, 934, 51, 1]

Use filter to get an array with elements whose 
value is less than a threshold (assume this is fixed for now)

Use first the standard function 
declaration and then an arrow function

*/

let array = [5, 6, 9, 19, 42, 934, 51, 1];

let threshold = 43;

let newarray = array.filter(number => number < threshold);

console.log(array);
console.log(newarray);

// Define threshold function in the "standard" way
let thresholdFunction = function(array, threshold)
{
    let newarray = [];
    for(let i = 0; i <= array.length; i++)
    {
        if(array[i] < threshold)
        {
            newarray.push(array[i]);
        }
    }
    return newarray;
}

let resultArray = thresholdFunction(array, threshold);
console.log(resultArray);