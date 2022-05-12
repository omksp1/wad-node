const express = require('express');
const router = express.Router();
const addsongs= require('./../controllers/addsongs');
const show = require('./../controllers/show')
const {deletesong,findbysinger,findbysong} = require('./../controllers/findbysingname')
router.get('/', (req, res) => {
    res.send('Hello World!');
});
router.post('/add',addsongs)
router.get('/bysong',findbysong);
router.get('/bysinger',findbysinger);
router.get('/delete',deletesong);
router.get('/show',show);
module.exports = router;