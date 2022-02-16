// myfecth function to get data from the server
// MySQL database

const API_ROOT = 'http://localhost:3000';

export async function api(url, data = null, method = null) {
    console.log("data:" + JSON.stringify(data));

    let respone;
    if (data) {
        respone = await fetch(API_ROOT + url, {
            method: method || 'POST',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(data)
        });
    } else {
        respone = await fetch(API_ROOT + url);
    }

    if (!respone.ok) {
        throw new Error(`${respone.status} ${respone.statusText}`);
    }
    return await respone.json();

}