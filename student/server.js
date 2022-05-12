const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const config = require('./config/database');
const path = require('path');

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/student/',function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
},
require('./routes/index'));

mongoose.connect('mongodb://localhost/studentmarks', { useNewUrlParser: true });

app.listen(port, () => {
    console.log('Server started on port ' + port);
});