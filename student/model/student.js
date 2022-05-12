const mongoose = require('mongoose');

const studentschema = mongoose.Schema({
    name:String,
    roll_no:Number,
    wad_marks:Number,
    cc_marks:Number, 
    dsbda_marks:Number,
    cns_marks:Number,
    ai_marks:Number
})

module.exports = mongoose.model('Studentmarks', studentschema);