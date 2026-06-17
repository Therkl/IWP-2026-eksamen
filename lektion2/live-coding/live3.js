/*
Begin by defining an object containing three fruits (apple, orange, pear) along with their respective quantities (12, 14, 16).

Write code that sums the quantities of the fruits in the object
*/

let fruits = {
    "apple": 12,
    "orange": 14,
    "pear": 16
};

// Adds another key-value pair
fruits.banana = 18;

// Sums the quantities
let total = 0;
for(let key in fruits)
{
    total += fruits[key];
}
console.log("The total amount of fruits is", total);



//console.log(fruits["banana"]);