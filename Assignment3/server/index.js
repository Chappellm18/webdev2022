// express app that serves up the static files in the public directory
// and the api routes in the api directory

const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const httpPort = process.env.PORT || 3000;
const app = express();
const userController = require('./controllers/users.js');
const bodyPaser = require('body-parser');
app
    .use(cors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    }))
    .use(express.json())
    .use(express.static(path.join(__dirname, '../docs')))
    .use('/users', userController)
    .use(bodyPaser.json())



// gets 

app
    .get('*', (req, res) => res.sendFile(path.join(__dirname, '../docs/index.html')))


// listen
app.listen(httpPort, () => {
    console.log(`Server listening on port ${httpPort}`);
});
