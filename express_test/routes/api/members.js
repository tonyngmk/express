const express = require('express');
const router = express.Router();
const members = require('../../Members')

router.get('/', (req, res) => {
    // res.send('<h1>Hello world!</h1>');
    res.json(members);
});

router.get('/:id', (req, res) => {
    // res.send(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `Member ${req.params.id} not found`});
    }
    
});

module.exports = router;
