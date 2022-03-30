let { connection } = require('./database.js')

// get all have posts
module.exports.GetAllHavePosts = function GetAllHavePosts() {
    // return all posts from mySQL db
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM `web-dev`.`havepost`', function (err, results) {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}

// get all request posts
module.exports.GetAllRequestPosts = function GetAllRequestPosts() {
    // return all posts from mySQL db
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM `web-dev`.`requestpost`', function (err, results) {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}

// create a have post
module.exports.CreateHavePost = function CreateHavePost(post_id, user_id) {
    // add post to mySQL db
    return new Promise((resolve, reject) => {
        let sql = "INSERT INTO `web-dev`.`havepost` VALUES ('" + post_id + "', '" + user_id + "')";
        connection.query(sql, function (err, results) {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}
