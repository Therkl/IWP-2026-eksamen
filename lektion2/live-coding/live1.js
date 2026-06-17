/*
Let’s try 5 array operations.
Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle with “Classics”. 
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.
*/
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
console.log(styles);
styles[1] = "Classics";
console.log(styles);
let firstValue = styles.shift();
console.log(firstValue);
styles.unshift("Reggae");
styles.unshift("Rap");
console.log(styles);