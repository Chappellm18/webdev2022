const express = require('express');
const models = require('../models/posts.js');

const app = express();

app.use(express.Router());

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
app.post('/have', (req, res) => {
    let post_id = req.body.post_id;
    let user_id = req.body.user_id;
    models.CreateHavePost(post_id, user_id)
        .then(post => {
            res.json(post)
        })
        .catch(err => {
            res.json(err)
        })
});