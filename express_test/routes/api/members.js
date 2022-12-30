const express = require('express');
const router = express.Router();
const members = require('../../Members')
const uuid = require('uuid');

// Get all members
router.get('/', (req, res) => {
    // res.send('<h1>Hello world!</h1>');
    res.json(members);
});

// Get individual member
router.get('/:id', (req, res) => {
    // res.send(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `Member ${req.params.id} not found`});
    }
    
});

// Create member
router.post('/', (req, res) => {
    // res.send(req.body);
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if (!newMember.name || !newMember.email) {
        res.status(400).json({msg: "Please include name / email"});
    }

    members.push(newMember);
    // res.json(members);
    res.redirect('/');
});


// Update member
router.put('/:id', (req, res) => {
    // res.send(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        const updateMember = req.body;
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)) {
                member.name = updateMember.name ? updateMember.name : member.name
                member.email = updateMember.email ? updateMember.email : member.email
            
                res.json({msg: `Member ${member.id} updated!`, member})
            }
        });
        // res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `Member ${req.params.id} not found`});
    }
    
});

// Delete individual member
router.delete('/:id', (req, res) => {
    // res.send(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json({
            msg: 'Member deleted!',
            members: members.filter(member => member.id !== parseInt(req.params.id))
        })
        // res.json());
    } else {
        res.status(400).json({msg: `Member ${req.params.id} not found`});
    }
    
});




module.exports = router;
