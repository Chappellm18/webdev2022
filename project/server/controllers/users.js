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

// check org for user_id
app.get('/checkOrg/', (req, res) => {


    models.CheckOrg()
        .then(orgs => {
            res.json(orgs)
        })
        .catch(err => {
            res.json(err)
        })
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

// get all post requests

// get post request by id

// create a post reuest

// get all post haves

// get post have by id

// create a post have

// get all posts general

// get post general by id





module.exports = app;