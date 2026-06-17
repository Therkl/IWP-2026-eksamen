const http = require("http");
const fs = require("fs");

const host = "127.0.0.1";
const port = 8000;

// Create the HTTP server
const server = http.createServer((req, res) => {

    // Check if client wants to read the CSS file.
    if(req.url === "/style2.css")
    {
        // Read the CSS file
        fs.readFile("style2.css", (err, data) => {
            if(err) // If there is an error in reading the file
            {
                res.writeHead(500);
                return res.end("Error loading CSS");
            }
            // Otherwise, return success message.
            res.writeHead(200, {"Content-Type": "text/css"});
            res.end(data);
        });
    }
    else if(req.url === "/") // Client requests some other resource (incl. main website)
    {
        // Send response header
        res.writeHead(200, {"Content-Type": "text/html"});
        // Send response body
        const body = `
            <html>
                <head>
                    <title>Live coding 2</title>
                    <link rel="stylesheet" href="/style2.css">
                </head>
                <body>
                    <h1>Hello world</h1>
                    <p>This is my first web server</p>
                </body>
            </html>`;
        res.end(body);
    }
    else // Client requests page that doesn't exist
    {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("Page not found");
    }
});

// Start the server
server.listen(port, host, () => {
    console.log("Server started.");
});