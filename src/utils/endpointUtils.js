/**
 * Resources referred:
 * https://stackoverflow.com/questions/30008114/how-do-i-promisify-native-xhr
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
