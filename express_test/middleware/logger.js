const express = require('express');

const app = express();

// Middleware
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
};

// Init middleware
app.use(logger);
