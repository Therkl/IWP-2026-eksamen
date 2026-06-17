const express = require("express");

const app = express();
const port = 3000;

// Adding a link to the about page from the main page
app.get("/", (req, res) => {
  res.send(`
    <h1>Hello World!</h1>
    <a href="/about">Go to about page</a><br>
    <a href="/user/Charlie/post/1">Go to user post</a>
  `);
});

// Adding a static route
app.get("/about", (req, res) => {
  res.send("This is the about page.");
})

// Adding a dynamic route (when user visits: http://localhost:3000/hello/Charlie, it returns "Hello Charlie")
app.get("/hello/:name", (req, res) => {
  res.send("Hello " + req.params.name);
});

// Adding query parameters so that when user visits http://localhost:3000/greet?name=Alice, it returns Hello Alice.
app.get("/greet", (req, res) => {
  const name = req.query.name || "stranger";
  res.send("Hello " + name);
});

// Exercise 4 (Dynamic route with multiple parameters)
app.get("/user/:name/post/:id", (req, res) => {
  const name = req.params.name;
  const id = req.params.id;

  res.send(`User ${name}, Post ${id}`);
});

// Exercise 5 (/search route with query parameters)
app.get("/search", (req, res) => {
  const term = req.query.term;
  const limit = req.query.limit;

  if (!term || !limit) {
    return res.send("Please provide search parameters");
  }

  res.send(`Searching for ${term}, showing ${limit} results`);
});

// Adding a "catch-all" 404 route.
app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});