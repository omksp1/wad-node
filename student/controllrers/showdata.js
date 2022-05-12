const student = require('./../model/student')
const mongoose = require('mongoose');


// show all students
const showdata = async (req, res) => {
    let result = await student.find();
    let output = ``;
    result.forEach(element => {
        output += `<tr>
        <td>${element.name}</td>
        <td>${element.roll_no}</td>
        <td>${element.wad_marks}</td>
        <td>${element.cc_marks}</td>
        <td>${element.dsbda_marks}</td>
        <td>${element.cns_marks}</td>
        <td>${element.ai_marks}</td>
        </tr>`;
    })
    console.log(result);

    res.send(`<table border="1">
    <tr>
    <th>Name</th>
    <th>Roll No</th>
    <th>WAD Marks</th>
    <th>CC Marks</th>
    <th>DSBDA Marks</th>
    <th>CNS Marks</th>
    <th>AI Marks</th>
    </tr>
    ${output}
    </table>`);
}

// show data by student name/rollno/
const showdataByName = async (req, res) => {
    let{field, value} = req.body;
    let result = await student.find({ [field]:value });
    let output = ``;
    result.forEach(element => {
        output += `<tr>
        <td>${element.name}</td>
        <td>${element.roll_no}</td>
        <td>${element.wad_marks}</td>
        <td>${element.cc_marks}</td>
        <td>${element.dsbda_marks}</td>
        <td>${element.cns_marks}</td>
        <td>${element.ai_marks}</td>
        </tr>`;
    })

    res.send(`You have searched studentMark according to: ${field} <br>
            Total number of students: ${result.length} <br>
    <table border="1">
    <tr>
    <th>Name</th>
    <th>Roll No</th>
    <th>WAD Marks</th>
    <th>CC Marks</th>
    <th>DSBDA Marks</th>
    <th>CNS Marks</th>
    <th>AI Marks</th>
    </tr>
    ${output}
    </table>`);
}

// list students who got more than 25 marks in all subjects
const showdataByMarks = async (req, res) => {
    let result = await student.find({ wad_marks: { $gt: 25 }, cc_marks: { $gt: 25 }, dsbda_marks: { $gt: 25 }, cns_marks: { $gt: 25 }, ai_marks: { $gt: 25 } });
    let output = ``;
    result.forEach(element => {
        output += `<tr>
        <td>${element.name}</td>
        </tr>`;
    })

    res.send(`Students with marks greater than 25 <br>
            Total number of students: ${result.length} <br>
    <table border="1">
    <tr>
    <th>Names</th>
    </tr>
    ${output}
    </table>`);
}

// List the names who got less than 40 in both Maths and Science
const showdataByMarks2 = async (req, res) => {
    let result = await student.find({ wad_marks: { $lt: 40 }, cc_marks: { $lt: 40 } });
    let output = ``;
    result.forEach(element => {
        output += `<tr>
        <td>${element.name}</td>
        </tr>`;
    })
    
    res.send(`Students with marks less than 40 <br>
            Total number of students: ${result.length} <br>
    <table border="1">
    <tr>
    <th>Names</th>
    </tr>
    ${output}
    </table>`);
}

// Remove specified student document from collection.
const removeStudent = async (req, res) => {
    let{field, value} = req.body;
    let result = await student.deleteOne({ [field]:value });
    res.send(`Student with ${field} ${value} removed`);
}
module.exports = {
    showdata,
    showdataByName,
    showdataByMarks,
    showdataByMarks2,
    removeStudent
}