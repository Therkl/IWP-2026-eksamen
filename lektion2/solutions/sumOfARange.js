/*
Sum of a range exercise.
*/

function range(start, end, step = 1)
{
    let result = [];

    if(step > 0)
    {
        for(let n = start; n <= end; n++)
        {
            result.push(n);
        }
    }
    else if(step < 0)
    {
        for(let n = start; n >= end; n--)
        {
            result.push(n);
        }
    }
    else
    {
        return [];
    }

    return result;
}

function sum(array)
{
    let result = 0;

    for(let i = 0; i < array.length; i++)
    {
        result = result + array[i];
    }

    return result;
}

// Test cases
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55