// express app that serves up the static files in the public directory
// and the api routes in the api directory

const express = require('express');
const path = require('path');
const cors = require('cors');
const httpPort = process.env.PORT || 3000;
require('dotenv').config();

const app = express();

app
    .use(cors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    }))

    .use(express.static(path.join(__dirname, '../docs')))

    .use(express.json())


// gets 

app
    .get('*', (req, res) => res.sendFile(path.join(__dirname, '../docs/index.html')))


// listen
app.listen(httpPort, () => {
    console.log(`Server listening on port ${httpPort}`);
});
