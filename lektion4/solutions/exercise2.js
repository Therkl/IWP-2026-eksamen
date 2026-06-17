/*

Extend the function from exercise 1 so that if we run 

repeatText("Hi ", -3);

the function should throw a RangeError exception. This exception handling should work for all negative numbers.

*/

function repeatText(string, repetition)
{
    try
    {
        let repeatedString = string.repeat(repetition);

        return repeatedString;
    }
    catch (error)
    {
        console.log("An exception has occured: ");

        console.log(error.name);

        console.log(error.message);

        return string;
    }
}

// Test case 1
let myString = "Hi ";
let repetition = 3;
let repeatedString = repeatText(myString, repetition);
console.log(repeatedString);

// Test case 2
let negativeRep = -3;
repeatedString = repeatText(myString, negativeRep);
console.log(repeatedString);