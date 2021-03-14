const express = require('express');

const router = express.Router();
const { validationResult } = require('express-validator');
const { body } = require('express-validator');
const fileService = require('../services/select-file-service');
const {
  getSettings,
  writeSettings,
  isValidDir,
  getDefaultDir,
} = require('../services/settings-service.js');

/* GET home page. */
router.get('/', (req, res, next) => {
  // add a property called logFile and
  // assign to it the value of the HTTP request's logFile query parameter (req.query.logFile).
  console.log(req);
  const { logFile } = req.query;
  console.log(logFile);
  res.render('index', { title: 'Log Dashboard', logFile: req.query.logFile });
});

/* GET select file. */
router.get('/select-file', (req, res, next) => {
  fileService.setcwd(getDefaultDir());
  res.render('select-file', { title: 'Select Log File' });
});

/* GET settings. */
router.get('/settings', (req, res, next) => {
  res.render('settings', { title: 'Settings', settings: getSettings() });
});

router.post(
  '/settings',
  [
    body('defaultDir').custom((dirPath) => {
      if (dirPath && !isValidDir(dirPath)) {
        throw new Error('Default directory is not valid');
      }
      return true;
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('settings', {
        title: 'Settings',
        errors: errors.array()[0].msg,
        settings: getSettings(),
      });
    }

    const saved = writeSettings(req.body);
    res.render('settings', {
      message: saved ? 'Settings Saved' : '',
      errors: saved ? '' : 'Settings not saved',
      title: 'Settings',
      settings: getSettings(),
    });
  },
);

/* GET files. */
router.get('/files', (req, res) => fileService.get(req, res));

module.exports = router;
