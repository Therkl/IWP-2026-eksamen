/*
Fetch a particular users' name and this user's first post
This uses chaining
*/

let baseURL = "https://jsonplaceholder.typicode.com";
let usersEndpoint = "users";
let postsEndpoint = "posts";
let userID = 1;

fetch(baseURL + "/" + usersEndpoint + "/" + userID)
    .then(response => response.json())
    .then(user => {
        console.log("User: " + user.name);
        return fetch(baseURL + "/" + postsEndpoint + "?userId=" + user.id);
    })
    .then(response => response.json())
    .then(posts => {
        console.log("First post: " + posts[0].title);
    })
    .catch(error => console.error("Error: " + error));