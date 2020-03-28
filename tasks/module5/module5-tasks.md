# Selecting a log file

## Add file path as a query string
In `routes/index.ejs` on the route for `index` (the only route in the file) in the `options` object (the second argument to `res.render()`), add a property called `logFile` and assign it to the value of the HTTP request's `logFile` query parameter, e.g. `res.query.logFile`.