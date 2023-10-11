const WebSocket = require('ws');
const http = require('http'); // Import the http module
const server = http.createServer((req, res) => {
  // ... Your HTTP server code
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.send("That is the vibe")
  // WebSocket server logic here
});

// Start the server and bind to the appropriate host and port.
server.listen(5050, 'localhost', () => {
  console.log('Server is listening on port 5050');
});
