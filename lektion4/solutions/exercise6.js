/*

Exercise 6 (difficult):

Write a function, countNumber(start, end), that prints all integers from start to end, inclusive.  

These are the requirements of the function:

(1): It should print one number per second.
(2): The function should call itself recursively.  
(3): Use setTimeout() to schedule the next call.  

Hint: Inside your function, after printing the current number, you can schedule the next number by calling:

    setTimeout(() => countNumber(start + 1, end), 1000);

This way, the function will print the next number after 1 second.
*/

function countNumber(start, end)
{
    if(start > end)
    {
        return;
    }

    console.log(start);

    // Schedule the next number
    setTimeout( () => countNumber(start + 1, end), 1000 );

}

countNumber(1, 5);