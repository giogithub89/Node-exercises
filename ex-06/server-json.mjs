import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "application/json");

  const jsonResponseBody = JSON.stringify({ location: "Mars" });

  response.end(jsonResponseBody);
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});


// giovannibruno@MacBook-Pro-di-Giovanni Node-exercises % curl -v localhost:3000
// *   Trying ::1...
// * TCP_NODELAY set
// * Connected to localhost (::1) port 3000 (#0)
// > GET / HTTP/1.1
// > Host: localhost:3000
// > User-Agent: curl/7.64.1
// > Accept: */*
// > 
// < HTTP/1.1 200 OK
// < Content-Type: application/json
// < Date: Wed, 23 Nov 2022 07:31:25 GMT
// < Connection: keep-alive
// < Keep-Alive: timeout=5
// < Content-Length: 19
// < 
// * Connection #0 to host localhost left intact
// {"location":"Mars"}* Closing connection 0
