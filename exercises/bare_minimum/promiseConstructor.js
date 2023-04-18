/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('needle');
var Promise = require('bluebird');
const https = require('https');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function (filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err = null, data) => {
      if (err) {
        reject(err);
      } else {
        var firstLine = data.split('\n')[0];
        resolve(firstLine);
      }
    });
  });
};


// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  return new Promise((resolve, reject) => {
    if (url.slice(0, 8) !== 'https://') {
      reject(new Error('Invalid URI'));
    } else {
      https.get(url, (res) => {
        const { statusCode } = res;
        if (statusCode === 404) {
          reject(new Error('Invalid URI'));
        } else {
          resolve(statusCode);
        }
      });
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
