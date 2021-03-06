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

module.exports.AddLikeRequest = function AddLikeRequest(id) {
    // add 1 to likes column of post with id = id
    return new Promise((resolve, reject) => {
        connection.query('UPDATE `web-dev`.`requestpost` SET `likes` = `likes` + 1 WHERE `postID` = ' + id, function (err, results) {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}

module.exports.AddLikeHave = function AddLikeHave(id) {
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
module.exports.CreateHavePost = function CreateHavePost(user_id, message, image, active, orgInterested, animalTypes, postTitle) {
    // add post to mySQL db
    // sql columns userid, message,image, active orgInterested, animalTypes, likes,     postID, postTitle

    let sql = "INSERT INTO `web-dev`.`havepost` VALUES ('" + user_id + "', '" + message + "', '" + image + "', '" + active + "', '" + orgInterested + "', '" + animalTypes + "', '0', '0', '" + postTitle + "')";
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
module.exports.CreateRequestPost = function CreateRequestPost(user_id, message, image, active, orgInterested, animalTypes, postTitle) {

    // based on the userid get the orgID
    // need to find the org with the userid in the linkedusers table
    // then get the orgID from the org table
    // then set id to orgID
    // add post to mySQL db
    let id;
    let sql = "SELECT * FROM `web-dev`.`orgs`";
    return new Promise((resolve, reject) => {
        connection.query(sql, function (err, results) {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    }).then((results) => {
        for (let i = 0; i < results.length; i++) {
            let temp = results[i].linkedUsers.split(',');
            for (let j = 0; j < temp.length; j++) {
                if (temp[j] == user_id) {
                    id = results[i].orgID;
                    // break out of loop because we found the orgID
                    break;
                }
            }
        }
    }).then(() => {
        sql = "INSERT INTO `web-dev`.`requestpost` VALUES ('" + id + "', '" + message + "', 'NULL', '" + image + "', '" + active + "', '" + animalTypes + "', '0', '0', '" + postTitle + "')";
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
    })
}
