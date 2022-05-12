var mongoose = require('mongoose');

var musicSchema = new mongoose.Schema({
    songname: String,
    filmname: String,
    musicDirector: String,
    singer:String,
    actor:String,
    actress:String,
})

module.exports = mongoose.model('Music', musicSchema);