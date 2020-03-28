const fs = require("fs");
const path = require("path");

function getSettings() {
  const settingsData = fs.readFileSync(path.join(__dirname, "../json/settings.json"), "utf8");
  return JSON.parse(settingsData);
}

function writeSettings(newSettings) {
    let settingsJSON = JSON.stringify(newSettings, null, 2)
    fs.writeFileSync(path.join(__dirname, "../json/settings.json"), settingsJSON, "utf8");
}

function getDefaultDir() {
  const defaultDir = getSettings().defaultDir
  if (!defaultDir) {
    return process.cwd()
  }
  return isValidDir(defaultDir) ? defaultDir : process.cwd()
}

function isValidDir(dirPath) {
  try {
    fs.readdirSync(dirPath)
    return true
  } catch {
    return false
  }
}

module.exports = {
  getSettings,
  writeSettings,
  getDefaultDir,
  isValidDir
};