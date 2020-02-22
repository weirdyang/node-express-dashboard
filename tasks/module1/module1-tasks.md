# Configuring Websockets on the server

## Require the ws library
TASK: 1
In `bin/www`, require the built-in Node library `ws`, and store a reference to it 
in a `const` called `WebSocket`.

## Create a Websocket using the existing Express server configuration
TASK: 1
In `bin/www` after the http `server` variable is created , add a `const` called `wss` and assign it to a new 
`WebSocket.Server` instance. The `WebSocket.Server` constructor requires an `options` object as an argument that conforms to the [`WebSocket.ServerOptions` interface.] (https://github.com/websockets/ws/blob/master/doc/ws.md#new-websocketserveroptions-callback) Use the existing http `server` variable
for the `options` object's `server` property.

## Register a listener for the WebSocket server "connection" event
TASK: 3
In `bin/www` after the `server.listen()` and `server.on()` function calls, add a listener for the WebSocket server "connection" event. Do this by invoking the `wss.on()` function and passing the string "connection" as the first argument and a callback function as the second argument with `ws` as the callback's single parameter.

## Register a listener for the WebSocket server "connection" event's "message" event
TASK: 4
In `bin/www` inside the callback for the `wss` "connection" event, add a listener for the "message" event of the `ws` callback parameter added in the previous step. Do this by invoking the `ws.on()` function passing the string "message" as the first argument and a callback function as the second argument with `message` as the callback's single parameter.

## Send a simple WebSocket echo message to the client
TASK: 5
In `bin/www` inside the `ws.on("message", ...)` callback, add an echo back to the client. Do this by calling the `ws.send()` function and passing a string such as "Hello from the server!" with the `message` appended to the end. The string should evaluate to something like "Hello from the server! You sent: Hello from the client".




# Adding the Websocket-based log viewer window

## Add a log viewer panel
TASK 1:
In the `views/index.ejs`  file complete the following:
* Inside the existing `div` with class `container` below the title header, add another `div` 
  element with classes of `panel` and `panel-default`.
* Inside the `div` created above, add another `div` with a class of `panel-heading`. 
  For the `div` content add the text `"Log Viewer"`.
* Inside the `div` with classes `panel` and `panel-default` and below the div.

## Create the log viewer javascript file
TASK 2:
At the root of the project create a directory called `public`. Inside that directory 
create a directory called `javascripts`.
Inside the `public/javascripts` directory create a file called `log-viewer.js`

