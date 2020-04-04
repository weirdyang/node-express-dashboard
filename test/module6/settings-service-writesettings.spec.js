describe('services/settings-service.js', () => {
  const source = fs.readFileSync(path.join(process.cwd(), 'services/settings-service.js'), 'utf8');
  const selectFileService = jscs(source);

  it('should implement the `writeSettings()` function @settings-service-writesettings', () => {
    const writeSettings = selectFileService.findFunction("writeSettings")
    const settingsJson = writeSettings.findVariable("settingsJSON")

    const settingsJsonMatch = {
      "init.callee.object.name": "JSON",
      "init.callee.property.name": "stringify",
      "init.arguments[0].name": "newSettings"
    }
    assert(settingsJson.length && matchObj(settingsJson, settingsJsonMatch),
      "Are you reading the settings file into a `const` called `settingsData`?")

    const writeFileSync = writeSettings.findCall("writeFileSync")
    const writeFileSyncMatch = {
      "argument.callee.object.name": "JSON",
      "argument.callee.property.name": "parse",
      "argument.arguments[0].name": "settingsData"
    }
    assert(returnStatement.length && matchObj(returnStatement, returnStatementMatch),
      "Are you returning the parsed settings file?")
  });
});