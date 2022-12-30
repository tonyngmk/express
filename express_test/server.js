const express = require('express');
const app = express();
const moment = require('moment');
const members = [
    {
        id: 1,
        name: 'Tony',
        email: 'yoyo@gmail.com',
        status: 'inactive'
    },
    {
        id: 2,
        name: 'Bob',
        email: 'booboo@gmail.com',
        status: 'active'
    }
]

// Middleware
// const logger = (req, res, next) => {
//     console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
//     next();
// };

// Init middleware
// app.use(logger);

app.get('/api/members', (req, res) => {
    // res.send('<h1>Hello world!</h1>');
    res.json(members);
});

app.get('/api/members/:id', (req, res) => {
    // res.send(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `Member ${req.params.id} not found`});
    }
    
});

const PORT = process.envPORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
