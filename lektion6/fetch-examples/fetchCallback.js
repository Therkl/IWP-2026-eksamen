/*
Fetch a particular users' name and this user's first post
This is a "callback-hell" style of example
*/

let baseURL = "https://jsonplaceholder.typicode.com";
let usersEndpoint = "users";
let postsEndpoint = "posts";
let userID = 1;

fetch(baseURL + "/" + usersEndpoint + "/" + userID).then(response => {
    response.json().then(user => {
        fetch(baseURL + "/" + postsEndpoint + "?userId=" + user.id).then(response => {
            response.json().then(posts => {
                console.log("User: " + user.name);
                console.log("First post: " + posts[0].title);
            });
        });
    });
});