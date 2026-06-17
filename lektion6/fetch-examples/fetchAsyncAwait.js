/*
Fetch a particular users' name and this user's first post
This uses the async-await syntax
*/

let baseURL = "https://jsonplaceholder.typicode.com";
let usersEndpoint = "users";
let postsEndpoint = "posts";
let userID = 1;

async function fetchUserAndPost()
{
    // Fetch user
    const userResponse = await fetch(baseURL + "/" + usersEndpoint + "/" + userID);
    const user = await userResponse.json();
    console.log("User: " + user.name);

    // Fetch the user's first post
    const postsResponse = await fetch(baseURL + "/" + postsEndpoint + "?userId=" + user.id);
    const posts = await postsResponse.json();
    console.log("First post: " + posts[0].title);
}

fetchUserAndPost();