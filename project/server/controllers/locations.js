const express = require('express');
const models = require('../models/locations.js');
const app = express.Router();

app.get('/locations', (req, res) => {
    models.GetAllLocations()
        .then(locations => {
            res.json(locations)
        })
        .catch(err => {
            res.json(err)
        })
});

module.exports = app;