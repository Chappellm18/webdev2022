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
module.exports.CreateHavePost = function CreateHavePost(user_id, message, image, active, orgInterested, animalTypes) {
    // add post to mySQL db
    let sql = "INSERT INTO `web-dev`.`havepost` VALUES ('" + user_id + "', '" + message + "', '" + image + "', '" + active + "', '" + orgInterested + "', '" + animalTypes + "')";
    return new Promise((resolve, reject) => {

        //console.log(sql);
        connection.query(sql, function (err, results) {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}
