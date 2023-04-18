/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');
const readline = require('readline');
const https = require('https');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = (filePath, cb) => {
  fs.readFile(filePath, 'utf8', (err = null, data) => {
    if (err) {
      cb(err);
    } else {
      var firstLine = data.split('\n')[0];
      cb(err, firstLine);
    }
  });

};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = (url, cb) => {

  if (url.slice(0, 8) !== 'https://') {
    cb(new Error('Invalid URL'));
  } else {
    https.get(url, (res) => {
      const { statusCode } = res;
      if (statusCode === 404) {
        cb(new Error('Invalid URL'));
      } else {
        cb(err = null, statusCode);
      }
    });
  }






  // var webSite = nock(url);
  // console.log(url.get);
  // cb(err=null, url.get);
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
