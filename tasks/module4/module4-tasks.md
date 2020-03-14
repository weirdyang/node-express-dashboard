# Displaying a log file in real time

## Add file path as a query string
TASK 1:
In `routes/index.ejs` on the route for `index` (the only route in the file) in the `options` object (the second argument to `res.render()`), add a property called `logFile` and assign it to the value of the HTTP request's `logFile` query parameter, e.g. `res.query.logFile`.

## Add a hidden input tag for the log file path
TASK 2:
In `views/index.ejs` after the last `</div>` tag and before the `<script>` tag, add a hidden `<input>` tag with attributes `id="logFilePath"` and `value="<%= logFile %>"`. The `logFile` in the `value` attribute references the `logFile` property we passed from the route in `index.js`.

## Get the log file path from index.ejs
TASK 3:
In `public/javascripts/log-viewer.js` after the `logWindow` `const`, create a `const` called `filePath` and assign it to the value of the `logFilePath` hidden input field. Hint: use `document.getElementById()`

## Send the log file path to the WebSocket server
TASK 4:
In `public/javascripts/log-viewer.js` in the `connection.onopen` function handler, check that the `filePath` `const` is valid, i.e. truthy, and, if so, send the `filePath` string to the WebSocket server.

## Require the fs module
TASK 5:
In `bin/www` require the `fs` module and store a reference to it in a `const` called `fs` after the `require` for the `ws` module.

## Stream the log file to the client: create ReadStream to read log file
TASK 6:
In `bin/www` for the `ws.on("message", ...)` handler function, change the parameter from `message` to `filePath`. Inside the `"ws.on("message", ...)` event handler use `fs` module's `createReadStream` function to stream the file found at `filePath` to the client. Do this by passing the `filePath` parameter to `fs.createReadStream()`. `createReadStream` returns a `ReadStream` instance. Register an event handler for the `ReadStream` instance's `"data"` event. Use `chunk` as the parameter name for the `"data"` event handler.

## Stream the log file to the client: convert to string and split into array
In `bin/www` in the `ReadStream`'s `"data"` event handler, convert the `chunk` buffer to a `string` and use `string`s `split()` function to convert the `string` to an `array` split at new line characters, e.g. `"\n"`. Assign the array to a variable called `logs` using `let`.

## Stream the log file to the client: send newest entries first
In `bin/www` in the `ReadStream`'s `"data"` event handler, reverse the `logs` array using `array`'s `reverse()` function. Chain a call to `join()` on the reversed array to convert it back to a string. Join on new line characters, e.g. `"\n"` and assign it to the existing `logs` variable. Call `ws.send(logs)` to send the formatted logs back to the client.

## Display the logs in the log window
In `public/javascripts/log-viewer.js` in the `connection.onmessage` function handler, do a find and replace on the `data.event` `string` replacing new lines (`\n`) with a horizontal rule HTML tag (`<hr>`) and assign it to a `const` called `logs`. Set `logWindow.innerHTML` to `logs`. Hint: you can use `string`'s `replace()` function with a regex, but building on what we did in `bin/www` use `split()` and `join()` instead, e.g. `str.split("\n").join("<hr>")`.