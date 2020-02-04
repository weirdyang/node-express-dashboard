const fs = require('fs');
const _ = require('lodash');
const path = require('path');

let dir;

exports.setcwd = function(cwd) {
  dir = cwd;
}

function displayFiles(files, currentDir, query) {
  let data = [];
  files.forEach(function (file) {
    let isDirectory = fs.statSync(path.join(currentDir, file)).isDirectory();
    if (isDirectory) {
      data.push({
        name : file,
        isDirectory: true,
        path : path.join(query, file)
      });
    } else {
      data.push({
        name : file,
        isDirectory: false,
        path : path.join(query, file),
        currentDir: currentDir
      });
    }
  });
  return data;
}

function readDir(currentDir, res, query) {
  fs.readdir(currentDir, function (err, files) {
    let newDirectory = [];
    if (!err) {
      newDirectory = displayFiles(files, currentDir, query);
    }
    res.json(_.sortBy(newDirectory, function(f) { return f.name }));
  });

}

exports.get = function(req, res) {
  let currentDir = dir;
  let query = req.query.path || '';
  if (query) {
    currentDir = path.join(currentDir, query)
  } 
  readDir(currentDir, res, query);
};
