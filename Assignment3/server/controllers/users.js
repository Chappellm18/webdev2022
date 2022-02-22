const express = require('express');
const models = require('../models/users.js');

const app = express();

// get all users
app.get('/', (req, res) => {
    models.GetAllUsers()
        .then(users => {
            res.json(users)
        })
        .catch(err => {
            res.json(err)
        })
})

// login
app.post('/login', (req, res) => {
    models.Login(req.body.username, req.body.password)
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            res.json(err)
        })
})

// add user
app.post('/add', (req, res) => {
    models.AddUser(req.body.username, req.body.password, req.body.email, req.body.role, req.body.message)
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            res.json(err)
        })
})

