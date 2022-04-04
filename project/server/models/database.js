/* eslint-disable */
let mysql = require('mysql')
require('dotenv').config()
let connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.SQL_DB_USER,
    password: process.env.SQL_DB_PASSWORD,
    database: 'web-dev'
})

connection.connect()

module.exports = {
    connection
}
/* login function
exports.login = function (username, password, callback) {
    var sql = 'SELECT * FROM users WHERE username = ? AND password = ?'
    var params = [username, password]
    connection.query(sql, params, function (err, results) {
        if (err) {
            callback(err)
        } else {
            callback(null, results)
        }
    })
}

// insert new user
exports.insertUser = function (username, password, email, role, message, callback) {
    var sql = 'INSERT INTO users (username, password, email, role, message) VALUES (?, ?,?,?,?)'
    var params = [username, password, email, role, message]
    connection.query(sql, params, function (err, results) {
        if (err) {
            callback(err)
        } else {
            callback(null, results)
        }
    })
}
*/

//connection.end()
