const express = require('express');
const models = require('../models/posts.js');
const app = express.Router();


// get all have posts
app.get('/have', (req, res) => {
    models.GetAllHavePosts()
        .then(posts => {
            res.json(posts)
        })
        .catch(err => {
            res.json(err)
        })
});

// get all request posts
app.get('/request', (req, res) => {
    models.GetAllRequestPosts()
        .then(posts => {
            res.json(posts)
        })
        .catch(err => {
            res.json(err)
        })
});

// create a have post
app.post('/have/newpost', (req, res) => {

    let user_id = req.body.user_id;
    let message = req.body.message;
    let image = req.body.image;
    let active = req.body.active;
    let orgInterested = req.body.orgInterested;
    let animalTypes = req.body.animalTypes;
    models.CreateHavePost(user_id, message, image, active, orgInterested, animalTypes)
        .then(post => {
            res.json(post)
        })
        .catch(err => {
            res.json(err)
        })
});

module.exports = app;