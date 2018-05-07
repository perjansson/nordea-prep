const path = require('path');

const resolve = requestedPath => path.join(__dirname, '../', requestedPath);

const paths = {
    entryPoint: resolve('./src/index.js'),
    hostFileTemplate: resolve('./src/index.html'),
    hostFile: resolve('./dist/index.html'),
    srcRoot: resolve('./src')
};

module.exports = paths;
