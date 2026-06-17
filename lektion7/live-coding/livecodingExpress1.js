const express = require("express");

const app = express();
const port = 3000;

// Adding a link to the about page from the main page
app.get("/", (req, res) => {
  res.send(`
    <h1>Hello World!</h1>
    <a href="/about">Go to about page</a><br>
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

// Adding a "catch-all" 404 route.
app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});