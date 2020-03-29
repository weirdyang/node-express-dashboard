# Adding settings and configuration

## Require the `fs` and `path` modules
In `services/settings-service.js` require the `fs` module and store a reference to it in a `const` called `fs`. Then require the `path` module and store it in a `const` called `path`.

## Get a global reference to the settings file path
In `services/settings-service.js` after the `require`s, create a `const` named `settingsFilePath`. Assign it to the path value of the `settings.json` file located at `json/settings.json`. Hint: use `path.join()` and the Node constant `__dirname`, which is the absolute path of the directory containing the currently executing file.

## Implement the `getSettings()` function
In `services/settings-service.js` implement the `getSettings()` function. Do this by using `fs.readFileSync()` passing in as its argument the settings file path `const` `settingsFilePath`. Assign the result of `fs.readFileSync()` to a `const` named `settingsData`. Use `JSON.parse()` to parse `settingsData` and return it.



