const fs = require("fs")
const path = require("path")

function getSettings() {
  const settingsData = fs.readFileSync(path.join(__dirname, "../json/settings.json"))
  return JSON.parse(settingsData)
}

function writeSettings(newSettings) {
  return false
}

function getDefaultDir() {
  const defaultDir = getSettings().defaultDir
  if (!defaultDir) {
    return process.cwd()
  }
  return isValidDir(defaultDir) ? defaultDir : process.cwd()
}

function isValidDir(dirPath) {
  return false
}

module.exports = {
  getSettings,
  writeSettings,
  getDefaultDir,
  isValidDir
};