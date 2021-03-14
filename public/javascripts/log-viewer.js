/* eslint-disable no-undef */
/* eslint-disable strict */
// In public/javascripts/log-viewer.js, create a const called connection,
// and assign to it a new WebSocket() instance,
// passing it the string "ws://localhost:3000". Note: WebSocket is part of the web API
// and is provided by the browser so no need for a require.
// eslint-disable-next-line strict

'use strict';

const connection = new WebSocket('ws://localhost:3000');
const logWindow = document.querySelector('#log-window');
const filePath = document.getElementById('logFilePath').value;

connection.onopen = (event) => {
  // connection.send('Hello from the client!');
  // connection.send(event?.data);
  if (filePath) {
    connection.send(filePath);
  }
  console.log(event);
};

connection.onmessage = (event) => {
  // logWindow.innerHTML = event.data;
  const logs = event.data.split('\n').join('<hr/>');
  logWindow.innerHTML = logs;
};
