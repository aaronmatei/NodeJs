const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello world");
    res.end();
  }
  if (req.url === "/courses") {
    res.write(JSON.stringify([1, 2, 3, 4, 5]));
    res.end();
  }
});

server.listen(3000);
console.log("Listening to port 3000...");
