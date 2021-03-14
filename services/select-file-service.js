// In services/select-file-service.js, require the fs module,
// and store a reference to it in a const called fs.
// Then require the path module, and store it in a const called path.
const fs = require('fs');
const path = require('path');

const dir = process.cwd();

function isDirectory(currentDir, file) {
  const fileInfo = fs.statSync(
    path
      .join(currentDir, file),
  );
  return fileInfo.isDirectory();
}

function getDirectoryContents(files, currentDir, query) {
  const data = [];
  files.forEach((file) => {
    if (isDirectory(currentDir, file)) {
      data.push(
        {
          name: file,
          isDirectory: true,
          path: path.join(query, file),
        },
      );
    } else {
      data.push(
        {
          name: file,
          isDirectory: false,
          path: path.join(query, file),
          currentDir,
        },
      );
    }
  });
  return data;
}

function readDir(currentDir, res, query) {
  fs.readdir(currentDir, (err, files) => {
    let directoryContents = [];
    if (!err) {
      directoryContents = getDirectoryContents(files, currentDir, query);
    }
    res.json(directoryContents);
  });
}

exports.get = (req, res) => {
  let currentDir = dir;

  const query = req.query.path || '';

  if (query) {
    currentDir = path.join(currentDir, query);
  }
  readDir(currentDir, res, query);
};
