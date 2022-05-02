// models for users

let { connection } = require('./database.js')


// get user by id
module.exports.GetUserById = async function GetUserById(id) {
    // get user by id
    let sql = "SELECT username, userImage FROM `web-dev`.`users` WHERE userID = '" + id + "'";
    //console.log(sql);
    // return user
    return new Promise((resolve, reject) => {
        connection.query(sql, function (err, results) {
            if (err) {
                reject(err)
            }
            else {
                resolve(results[0], results[1])
            }
        })
    })
}

// get org by id
module.exports.GetOrgById = async function GetOrgById(id) {
    // get org by id
    let sql = "SELECT * FROM `web-dev`.`orgs` WHERE orgID = '" + id + "'";
    //console.log(sql);
    // return org
    return new Promise((resolve, reject) => {
        connection.query(sql, function (err, results) {
            if (err) {
                reject(err)
            }
            else {
                resolve(results[0])
            }
        })
    })
}



// Get all orgs from the orgs db
module.exports.GetAllOrgs = function GetAllOrgs() {
    //return all orgs from mySQL db
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM `web-dev`.`orgs`", function (err, results) {
            if (err) {
                reject(err)
            }
            else {
                resolve(results)
            }
        })
    })
}

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

// update user password
module.exports.UpdateUserPassword = async function UpdateUserPassword(id, password) {
    // update user password
    let sql = "UPDATE `web-dev`.`users` SET password = '" + password + "' WHERE userID = '" + id + "'";
    //console.log(sql);
    // return user
    return new Promise((resolve, reject) => {
        connection.query(sql, function (err, results) {
            if (err) {
                reject(err)
            }
            else {
                resolve(results)
            }
        })
    })
}



// Add a user to the db
module.exports.AddUser = async function AddUser(name, username, password, email, role, message) {
    // add a user to the mySQL db
    let sql = "INSERT INTO `web-dev`.`users` VALUES (DEFAULT, '" + name + "', '" + username + "', '" + password + "', '" + email + "', '" + role + "', '" + message + "', DEFAULT)";
    //console.log(sql);
    // add user with slq query to the mySQL db
    return new Promise((resolve, reject) => {
        connection.query(sql, function (err, results) {
            if (err) {
                console.log(err);
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
    let sql = "SELECT * FROM `web-dev`.`users` WHERE username = '" + username + "' LIMIT 1";
    //console.log(sql);
    // check if password matches users password and return the user
    return new Promise((resolve, reject) => {
        connection.query(sql, function (err, results) {
            if (err) {
                reject(err)
            }
            else {
                if (results.length > 0) {
                    if (password === results[0].password) {
                        resolve(results[0])
                    }
                }
            }
        })
    })
}

module.exports.DeleteUser = async function DeleteUser(id) {
    // delete user from db
    let sql = "DELETE FROM `web-dev`.`users` WHERE userID = '" + id + "'";
    //console.log(sql);
    // return user
    return new Promise((resolve, reject) => {
        connection.query(sql, function (err, results) {
            if (err) {
                reject(err)
            }
            else {
                resolve(results)
            }
        })
    })
}


// get all post requests

// get post request by id

// create a post reuest

// get all post haves

// get post have by id

// create a post have

// get all posts general

// get post general by id