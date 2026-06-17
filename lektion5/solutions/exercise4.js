/*
Exercise 4
*/

let url = "https://jsonplaceholder.typicode.com/users";

async function inspectHeaders(url)
{
    let response = await fetch(url);
    console.log("Status: ", response.status);   
}

inspectHeaders(url)
    .catch(error => console.log("Error:", error.message));