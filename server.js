const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const config = require('./config/index');

const app = express();

app.listen(config.port, err=>{
    if(err) throw err;
    console.log(`Server listening on port ${config.port}`);
});

app.use(morgan('combined'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use(session({
        resave: true,
        secret: config.secret,
        saveUninitialized: true
    }));

app.get('/', async(req, res)=>{
    res.end("Musia");
});

app.get('/anotherUrl', async(req,res)=>{
    res.end('anotherUrl');
});