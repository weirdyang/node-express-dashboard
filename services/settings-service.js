const fs = require('fs');
const path = require('path');

const settingsData = fs.readFileSync(path.join(__dirname, '../json/settings.json'), 'utf8');
var settings = JSON.parse(settingsData);

const writeSettings = () => {
    let settingsJSON = JSON.stringify(settings, null, 2)
    fs.writeFileSync(path.join(__dirname, '../json/settings.json'), settingsJSON, 'utf8');
}

function getDefaultDir() {
  const defaultDir = settings.user.defaultDir
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
  settings,
  writeSettings,
  getDefaultDir,
  isValidDir
};