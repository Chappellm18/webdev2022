// myfecth function to get data from the server
// MySQL database

const API_ROOT = 'http://localhost:3100/';

// api function to get/send data from/to the server
export async function api(endpoint, data, method) {
    // default to GET request if no method specified
    method = method || 'GET';
    let insertData;
    // if we're sending data, add it to the URL
    if (data) {
        insertData = JSON.stringify(data);
    }


    // create a new promise
    return await new Promise(function (resolve, reject) {
        // create a new XMLHttpRequest
        let xhr = new XMLHttpRequest();
        // open the request
        xhr.open(method, API_ROOT + endpoint);
        // set the content type header
        xhr.setRequestHeader('Content-Type', 'application/json');
        // set the authorization header
        //xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
        // set the responseType to json
        xhr.responseType = 'json';
        // send the request
        // add insertData to the URL if we have it



        xhr.send(insertData);
        //console.log(insertData);
        // listen for the request to complete
        xhr.onload = function () {
            // if we get a status code of 200, resolve the promise
            if (xhr.status === 200) {
                resolve(xhr.response);
            }
            // otherwise reject the promise
            else {
                reject(xhr.response);
            }
        };
        // listen for errors
        xhr.onerror = function () {
            reject(xhr.response);
        }
    });
}
