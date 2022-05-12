var music = require('../models/music');


const addsongs = async(req,res)=>{
    const {songname,filmname,musicDirector,singer,actor,actress} = req.body;
    const result=  new music({
        songname,
        filmname,
        musicDirector,
        singer,
        actor,
        actress
    })
    await result.save();

    res.send("Song added successfully");
}

module.exports=addsongs