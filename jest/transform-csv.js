const path = require('path');
const papa = require('papaparse');

module.exports = {
  process(src, filename, config, options) {
    const obj = papa.parse(src, {
      header: true,
      skipEmptyLines: true,
      comments: '#'
    }).data;
    return 'module.exports = ' + JSON.stringify(obj) + ';';
  },
};