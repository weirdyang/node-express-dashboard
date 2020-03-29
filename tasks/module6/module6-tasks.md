# Adding settings and configuration

## Require the `fs` and `path` modules
In `services/settings-service.js` require the `fs` module and store a reference to it in a `const` called `fs`. Then require the `path` module and store it in a `const` called `path`.

## Implement the `getSettings()` function
In `services/settings-service.js` implement the `getSettings()` function. Do this by using `fs.readFileSync()` passing in as the argument the path to the `settings.json` file located at `json/settings.json`. Hint: use `path.join()` and the Node constant `__dirname`, which is the absolute path of the directory containing the currently executing file. Assign the result of `fs.readFileSync()` to a `const` named `settingsData`. Use `JSON.parse()` to parse `settingsData` and return it.

