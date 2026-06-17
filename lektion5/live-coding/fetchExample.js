console.log("Before the request");

fetch("http://www.wikipedia.org")
    .then(response => response.text())
    .then(data => {
    console.log("Request finished.");
    console.log("Page size", data.length);
    console.log("Page content", data)
    })
    .catch(error => console.log("Error", error.message));

console.log("After the request");