// Load HTTP module
const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 8000;

// Create HTTP server
const server = http.createServer((req, res) => {
  if(req.url === "/style.css")
  {
    // Read CSS file
    fs.readFile("style.css", (err, data) => {
        if(err)
        {
            res.writeHead(500);
            return res.end("Error loading CSS");
        }
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
    });
  }
  else if(req.url === "/")
  {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { "Content-Type": "text/html" });

    // Send the response body HTML
    const body = `
        <html>
            <head>
            <link rel="stylesheet" href="/style.css">
            </head>
            <body>
                <h1>Hello world</h1>
                <p>This is my first server</p>
                <a href="/admin.html">Go to admin page</a>
            </body>
        </html>`
    res.end(body);
  }
  else if(req.url === "/admin.html")
  {
    res.writeHead(200, { "Content-Type": "text/html" });

    const body = `<html>
                <head>
            <link rel="stylesheet" href="/style.css">
            </head>
        <body>
            <h1>Admin login</h1>
            <p>You don't have access</p>
        </body>
        </html>`

    res.end(body);
  }
  else
  {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.end("File not found.");
  }

});

// Prints a log once the server starts listening
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
