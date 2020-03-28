const fs = require("fs");
const _ = require("lodash");
const path = require("path");

let dir;

exports.setcwd = (cwd) => {
  dir = cwd;
}

function getDirectoryContents(files, currentDir, query) {
  let data = [];
  files.forEach((file) => {
    if (isDirectory(currentDir, file)) {
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

function isDirectory(currentDir, file) {
  return false
}

function readDir(currentDir, res, query) {
  return []
}

exports.get = (req, res) => {
  let currentDir = dir;
  let query = req.query.path || "";
  if (query) {
    currentDir = path.join(currentDir, query)
  } 
  readDir(currentDir, res, query);
};
