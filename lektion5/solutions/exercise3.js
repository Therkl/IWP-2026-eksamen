/*
Exercise 3 (a) and (b)
*/

console.log("Before both fetches");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => users[2])
    .then(user => user.phone)
    .then(phone => console.log("Phone:", phone))

console.log("Between the two fetches");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => users[2])
    .then(user => {
        console.log("Phone:", user.phone);
        console.log("Website:", user.website);
    })

console.log("After the fetches");