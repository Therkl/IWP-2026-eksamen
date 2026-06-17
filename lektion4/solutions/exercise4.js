/*

Exercise 4:

Use setInterval to create a repeating timer. It should print a number every second, starting from 1.

*/

let count = 1; // We start at 1.

setInterval( () => {
    console.log(count);
    count = count + 1;
}, 1000);