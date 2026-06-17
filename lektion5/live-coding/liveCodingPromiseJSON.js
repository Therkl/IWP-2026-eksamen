/*
Write a Promise that fetches the following data from the https://jsonplaceholder.typicode.com/users API.
Username of the first user
Email of the first user
Also add code that runs independently of the asynchronous code.
*/

console.log("Starting request...")

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json()) // Parse JSON
    .then(users => users[0]) // Extract first user
    .then(user => {
        console.log("Username: ", user.username)
        console.log("Email: ", user.email)
    })
    ; 

console.log("Program continues while waiting...")