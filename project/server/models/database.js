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
