const path = require('path');

const FileProxy = require('./FileProxy');
const fs = new FileProxy(require('fs'));

// This should exit because we don't want to read files with '.md' extension
fs.readFile(path.join(__dirname, 'demoText.md'), 'UTF-8')
    .then(content => {
        console.log(content);
    })
    .catch(err => {
        console.log(err);
        process.exit(0);
    });