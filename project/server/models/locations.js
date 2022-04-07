let { connection } = require('./database.js')

// get all locations from the orgs table
module.exports.GetAllLocations = function GetAllLocations() {
    // return all the locations from the orgs table
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM `web-dev`.`orgs`', function (err, results) {
            if (err) {
                reject(err)
            } else {
                // return an array of each org's location
                let org_locations = []
                for (let i = 0; i < results.length; i++) {
                    org_locations.push(results[i])
                }

                resolve(results)
            }
        })
    })
}
