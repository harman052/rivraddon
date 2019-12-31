/**
 * Resources referred:
 * https://stackoverflow.com/questions/30008114/how-do-i-promisify-native-xhr
 *
 * Following implementation of XMLHttpRequest (XHR) to make POST requests is
 * intentionally wrapped in a Promise object so as to make it easily usable in
 * other places. Also, using promises allows us to stay consistent with the
 * other parts of the code by avoiding ancient callback mechanism of XHR and
 * therefore, avoiding callback hell.
 */

const makeRequest = {
  post: function makePostRequest(url, data) {
    return new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      const jsonData = JSON.stringify(data);
      xhr.open("POST", url);
      xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
      xhr.onload = function() {
        if (this.status >= 200 && this.status < 300) {
          resolve(xhr.response);
        } else {
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.onerror = function() {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      };
      xhr.send(jsonData);
    });
  }
};

export default makeRequest;
