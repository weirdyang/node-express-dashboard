const url = "ws://localhost:3000"
const connection = new WebSocket(url)
const logWindow = document.querySelector("#log-window")
const filePath = document.getElementById("logFilePath").value;

connection.onopen = () => {
  if (filePath) {
    connection.send(filePath)  
  }
}

connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`)
}

connection.onmessage = (event) => {
  const logs = event.data.split("\n").join("<hr>")
  logWindow.innerHTML = logs
}