// In services/settings-service.js, require the fs module,
// and store a reference to it in a const called fs.
// Then require the path module, and store it in a const called path.
const fs = require('fs');
const path = require('path');

// const settingsFilePath = path.join(
//   __dirname,
//   '..',
//   'json',
//   'settings.json',
// );
// this is to pass the test;
const settingsFilePath = path.join(__dirname, '../json/settings.json');

function getSettings() {
  const settingsData = fs.readFileSync(settingsFilePath);

  return JSON.parse(settingsData);
}

function writeSettings(newSettings) {
  const settingsJSON = JSON.stringify(newSettings, null, 2);
  try {
    fs.writeFileSync(settingsFilePath, settingsJSON);
    return true;
  } catch {
    return false;
  }
}

function getDefaultDir() {
  // disable to pass test
  // eslint-disable-next-line prefer-destructuring
  const defaultDir = getSettings().defaultDir;
  if (!defaultDir) {
    return process.cwd();
  }
  return isValidDir(defaultDir) ? defaultDir : process.cwd();
}

function isValidDir(dirPath) {
  try {
    fs.readdirSync(dirPath);
    return true;
  } catch (error) {
    return false;
  }
}

module.exports = {
  getSettings,
  writeSettings,
  getDefaultDir,
  isValidDir,
};
