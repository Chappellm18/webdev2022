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

module.exports.AddLike = function AddLike(id) {
    // add 1 to likes column of post with id = id
    return new Promise((resolve, reject) => {
        connection.query('UPDATE `web-dev`.`havepost` SET `likes` = `likes` + 1 WHERE `postID` = ' + id, function (err, results) {
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

// get all have posts by user id
module.exports.GetAllHavePostsByUser = function GetAllHavePostsByUser(user_id) {
    // return all posts from database by user id
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM `web-dev`.`havepost` WHERE `userID` = ?', user_id, function (err, results) {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}

//get all request posts by user id
module.exports.GetAllRequestPostsByOrg = function GetAllRequestPostsByOrg(id) {
    // return all posts from database which has id
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM `web-dev`.`requestpost` WHERE `orgID` = ' + id, function (err, results) {
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

// create a request post
module.exports.CreateRequestPost = function CreateRequestPost(user_id, message, image, active, orgInterested, animalTypes) {
    // add post to mySQL db
    let sql = "INSERT INTO `web-dev`.`requestpost` VALUES ('" + user_id + "', '" + message + "', '" + image + "', '" + active + "', '" + orgInterested + "', '" + animalTypes + "')";
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
