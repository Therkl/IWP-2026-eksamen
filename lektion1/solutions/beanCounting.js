/*

Bean counting exercise.

*/

function countBs(string)
{
    // Returns the number of uppercase B's that are in the argument
    let totalBs = 0;

    for(let i = 0; i < string.length; i++)
    {
        if(string[i] == "B")
        {
            totalBs += 1;
        }
    }

    return totalBs;
}

function countChar(string, character)
{
    // Returns the total number of occurences of character in string
    let totalChar = 0;

    for(let i = 0; i < string.length; i++)
    {
        if(string[i] == character)
        {
            totalChar += 1;
        }
    }

    return totalChar;
}

// Test cases
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
console.log(countBs("British Broadcasting Corporation broadcasts brings news to everyone."));
// → 2
console.log(countChar("MISSISSIPPI", "S"));
// → 4