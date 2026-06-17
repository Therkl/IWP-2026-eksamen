/*

Continuing from exercise 4, add code so that when the timer reaches 5, it is stopped.

*/

let count = 1; // We start at 1

let max = 5; // We end at 5

let intervalId = setInterval( () => {
    console.log(count);

    if(count >= max)
    {
        clearInterval(intervalId);
    }

    count = count + 1;
}, 1000);