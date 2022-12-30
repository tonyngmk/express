const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const exphbs  = require('express-handlebars');
const members = require('./Members')
// const app = express();
// const moment = require('moment');
// const members = require('./members')

const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Member App',
        members
    });
})

// Body parser middlware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API Route
app.use('/api/members', require('./routes/api/members'))

const PORT = process.envPORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
