const student = require('./../model/student')
const mongoose = require('mongoose');

const createStudent = (req, res) => {
    //add data to student
    let{name, roll_no, wad_marks, cc_marks, dsbda_marks, cns_marks, ai_marks} = req.body;
    console.log(req.body);
    let newStudent = new student({
        name,
        roll_no,
        wad_marks,
        cc_marks,
        dsbda_marks,
        cns_marks,
        ai_marks
    });
    newStudent.save().then(() => {
        res.send('Student added successfully');
    }).catch(err => {
        res.send(err);
    }
    )



    // const { name, roll_no, wad_marks, cc_marks, dsbda_marks, cns_marks, ai_marks } = req.body;
    
    // const studentData = new student({
    //     name,
    //     roll_no,
    //     wad_marks,
    //     cc_marks,
    //     dsbda_marks,
    //     cns_marks,
    //     ai_marks
    // });
    // console.log(studentData);
    
    // await studentData.save((err, student) => {
    //     if (err) {
    //         res.send(err);
    //     }
    //     res.json(student);
    // });
}
module.exports = createStudent;