const express = require('express');
const path = require('path');
// const logger = require('./');
// const app = express();
// const moment = require('moment');
// const members = require('./members')

const app = express();

// Middleware
// const logger = (req, res, next) => {
//     console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
//     next();
// };

// Init middleware
// app.use(logger);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/members', require('./routes/api/members'))

const PORT = process.envPORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
