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
    //console.log(sql);
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
module.exports.Login = async function Login(username, password) {
    // check if username exists in db
    let sql = "SELECT * FROM `web-dev`.`users` WHERE username = '" + username + "'";
    //console.log(sql);
    // check if password matches users password and return the user
    return new Promise((resolve, reject) => {
        connection.query(sql, function (err, results) {
            if (err) {
                reject(err)
            }
            else {
                if (results.length > 0) {
                    if (results[0].password == password) {
                        resolve(results[0])
                    }
                    else {
                        reject("Wrong password")
                    }
                }
                else {
                    reject("User not found")
                }
            }
        })
    })



}
