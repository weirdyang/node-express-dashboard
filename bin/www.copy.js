/**
 * Module dependencies.
 */

const app = require('../app');
const debug = require('debug')('log-dashboard:server');
const http = require('http');
const WebSocket = require('ws');
const fs = require('fs');
const { getSettings } = require('../services/settings-service');
/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });
/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

wss.on('connection', (ws) => {
  console.log(ws);
  ws.on('message', (filePath) => {
    fs.watch(filePath, () => {
      fs.createReadStream(filePath).on('data', (chunk) => {
        let logsArr = chunk.toString().split('\n');
        const settings = getSettings();
        // On the line right after, check if settings.filter is truthy,
        // if so, exclude log entries in logsArr that include the value of settings.filter.
        // Assign this back to logsArr
        if (settings.filter) {
          logsArr = logsArr.filter((line) => !line.includes(settings.filter));
        }

        const logsStr = logsArr.reverse().join('\n');
        ws.send(logsStr);
      });
    });

    ws.send(`Hello from the server! you sent: ${filePath}`);
  });
});
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}
