// models for users

let { connection } = require('./database.js')


// Get all users from db
module.exports.GetAllUsers = function GetAllUsers() {
    // return all users from mySQL db
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM `web-dev`.`users`', function (err, results) {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}


// Add a user to the db
module.exports.AddUser = async function AddUser(name, username, password, email, role, message) {
    // add a user to the mySQL db
    let sql = "INSERT INTO `web-dev`.`users` VALUES ('" + name + "', '" + username + "', '" + password + "', '" + email + "', '" + role + "', '" + message + "')";
    console.log(sql);
    // add user with slq query to the mySQL db
    return new Promise((resolve, reject) => {
        connection.query(sql, function (err, results) {
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
        connection.query('SELECT * FROM `web-dev`.`users` WHERE username = ? AND password = ?', [username, password], function (err, results) {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }

        })

    })
}
