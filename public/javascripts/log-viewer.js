const url = 'ws://localhost:3000'
const connection = new WebSocket(url)
const logWindow = document.querySelector('#log-window')
var filePath = document.getElementById("logFilePath").value;

connection.onopen = () => {
  if (filePath) {
    connection.send(filePath)  
  }
}

connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`)
}

connection.onmessage = (e) => {
  var logs = e.data.split("\n").join("<br>")
  logWindow.innerHTML = `<br>${logs}<br>`
}