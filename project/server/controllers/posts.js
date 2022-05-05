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
app.get('/have/user/:id', (req, res) => {

    models.GetAllHavePostsByUser(req.params.id)
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


app.get('/request/user/:id', (req, res) => {
    models.GetAllRequestPostsByOrg(req.params.id)
        .then(posts => {
            res.json(posts)
        })
        .catch(err => {
            res.json(err)
        })
});

app.post('/request/like/:id', (req, res) => {
    models.AddLikeRequest(req.params.id)
        .then(post => {
            res.json(post)
        })
        .catch(err => {
            res.json(err)
        })
});

app.post('/have/like/:id', (req, res) => {
    models.AddLikeHave(req.params.id)
        .then(post => {
            res.json(post)
        })
        .catch(err => {
            res.json(err)
        })
});

// create a request post
app.post('/request/newpost', (req, res) => {
    let user_id = req.body.user_id;
    let message = req.body.message;
    let image = req.body.image;
    let active = req.body.active;
    let orgInterested = req.body.orgInterested;
    let animalTypes = req.body.animalType;
    let title = req.body.postTitle;
    models.CreateRequestPost(user_id, message, image, active, orgInterested, animalTypes, title)
        .then(post => {
            res.json(post)
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
    let animalTypes = req.body.animalType;
    let postTitle = req.body.postTitle;
    models.CreateHavePost(user_id, message, image, active, orgInterested, animalTypes, postTitle)
        .then(post => {
            res.json(post)
        })
        .catch(err => {
            res.json(err)
        })
});

module.exports = app;