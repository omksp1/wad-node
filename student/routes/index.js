const router = require('express').Router();
const createStudent = require("./../controllrers/createstudent")
const {showdata, showdataByName,showdataByMarks,showdataByMarks2,removeStudent } = require("./../controllrers/showdata")

// show data of all user
router.get('/', showdata);
// showdataby nameor rollno
router.post('/search', showdataByName);
// showdataby marks more than 25
router.get('/more25', showdataByMarks);
router.get('/less40', showdataByMarks2);
// remove student by name or rollno
router.post('/remove', removeStudent);

router.post('/addmarks',createStudent);
module.exports = router;