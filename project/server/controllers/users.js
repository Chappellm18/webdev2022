const express = require('express');
const models = require('../models/users.js');

const app = express();

app.use(express.Router());

// get all users
app.get('/', (req, res) => {
    models.GetAllUsers()
        .then(users => {
            res.json(users)
        })
        .catch(err => {
            res.json(err)
        })
});
// get org by id
app.get('/orgs/:id', (req, res) => {
    models.GetOrgById(req.params.id)

        .then(org => {
            res.json(org)
        })
        .catch(err => {
            res.json(err)
        })
});

// get all orgs
app.get('/orgs', (req, res) => {
    models.GetAllOrgs()
        .then(org => {
            // return the data as an array of objects

            res.json(org)
        })   // send orgs back to client
        .catch(err => { res.json(err) })    // send error back to client
});

// get user by id
app.get('/:id', (req, res) => {
    models.GetUserById(req.params.id)
        .then(user => { res.json(user) })   // send user back to client
        .catch(err => { res.json(err) })    // send error back to client
});

//update user password
app.put('/:id/password', (req, res) => {
    models.UpdateUserPassword(req.params.id, req.body)
        .then(user => { res.json(user) })   // send user back to client
        .catch(err => { res.json(err) })    // send error back to client
});





// login
app.post('/login', (req, res) => {
    models.Login(req.body.username, req.body.password)
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            res.json(err)
        })
});

// add user
app.post('/add', (req, res) => {
    // wait for values to be passed in from the client
    let name = req.body.name;
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let role = req.body.role;
    let message = req.body.message;
    // add user to the mySQL db
    models.AddUser(name, username, password, email, role, message)
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            res.json(err)
        })
});

app.delete('/delete/:id', (req, res) => {
    models.DeleteUser(req.params.id)
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            res.json(err)
        })
});

// get all post requests

// get post request by id

// create a post reuest

// get all post haves

// get post have by id

// create a post have

// get all posts general

// get post general by id





module.exports = app;