//Working with HTTP Module
const http = require("http");

//Create Routes using Http
const server = http.createServer((req, res) => {
    //Routes
    if (req.url === "/") {
        res.write("Going Home!");
        res.end();
    }
    if (req.url === "/api/classes") {
        res.write(JSON.stringify(["React", "Angular", "Node"]));
        res.end();
    }
});

//defining port
server.listen(3000);
console.log("Server started on port 3000");
