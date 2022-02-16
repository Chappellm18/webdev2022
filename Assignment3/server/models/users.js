// models for users

const { connection } = require('./database.js')


// Get all users from db
module.exports.GetAllUsers = function GetAllUsers() {
    // return all users from mySQL db
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM users', function (err, results) {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}


// Add a user to the db
module.exports.AddUser = function AddUser(username, password, email, role, message) {
    // add a user to the mySQL db
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO users (username, password, email, role, message) VALUES (?, ?,?,?,?)', [username, password, email, role, message], function (err, results) {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}


// login function
module.exports.Login = function Login(username, password) {
    // return a user from mySQL db
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function (err, results) {
            if (err) {
                reject(err)
            }
            resolve(results)
        })
    })
}
