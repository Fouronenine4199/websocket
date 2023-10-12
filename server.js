// const WebSocket = require('ws');
// const http = require('http'); // Import the http module
// const server = http.createServer((req, res) => {
//   // ... Your HTTP server code
// });

// const wss = new WebSocket.Server({ server });

// wss.on('connection', (ws) => {
//   console.log('Client connected');
//   ws.send("That is the vibe")
//   // WebSocket server logic here
// });

// // Start the server and bind to the appropriate host and port.
// server.listen(5050, 'localhost', () => {
//   console.log('Server is listening on port 5050');
// });

// var http = require('http');
// var server = http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     var message = 'It works!\n',
//         version = 'NodeJS ' + process.versions.node + '\n',
//         response = [message, version].join('\n');
//     res.end(response);
// });
// server.listen();



const WebSocket = require('ws');

const PORT = 8091

const wss = new WebSocket.Server({ port: PORT }); // Create a WebSocket server on port 8080

wss.on('connection', (ws) => {
  console.log('Client connected');

  // Send a welcome message to the client
  ws.send('Welcome to the WebSocket server!');

  // Listen for messages from the client
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    // You can process the message here and send a response back if needed
    ws.send(`You sent: ${message}`);
  });

  // Handle connection close
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

