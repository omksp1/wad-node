const music = require('./../models/music')
const show = require("./show")

const findbysong = async(req,res)=>{
    const songname= req.body.songname;
    const result = await music.find({songname:songname})
    if(result.length==0) 
        res.send("Sorry there is no song with this name");

    else{
        var output='';
    result.forEach(element => {
        output+=`    <tr>
        <td>${element.songname}</td>
        <td>${element.filmname}</td>
        <td>${element.musicDirector}</td>
        <td>${element.singer}</td>
        <td>${element.actor}</td>
        <td>${element.actress}</td>
        </tr>`
    });
    res.send(`Total Number of Documents: ${result.length} <br>
    <table border>
    <tr>
    <th>Songname</th>
    <th>Filmname</th>
    <th>Music Director</th>
    <th>Singer</th>
    <th>Actor</th>
    <th>Actress</th>
    </tr>
    ${output}
    </table>
    
    `);

    }
}

const findbysinger = async(req,res)=>{
    const singer= req.body.singer;
    const result = await music.find({singer:singer})
    if(result.length==0) 
        res.send("Sorry there is no song with this name");
    else{
    var output='';
    result.forEach(element => {
        output+=`    <tr>
        <td>${element.songname}</td>
        <td>${element.filmname}</td>
        <td>${element.musicDirector}</td>
        <td>${element.singer}</td>
        <td>${element.actor}</td>
        <td>${element.actress}</td>
        </tr>`
    });
    res.send(`Total Number of Documents: ${result.length} <br>
    <table border>
    <tr>
    <th>Songname</th>
    <th>Filmname</th>
    <th>Music Director</th>
    <th>Singer</th>
    <th>Actor</th>
    <th>Actress</th>
    </tr>
    ${output}
    </table>
    
    `);

    }
}



// delete song

const deletesong=async(req,res)=>{
    let songname = req.body.songname;
    //delete son
    const result = await music.findOneAndDelete({songname:songname});
    res.json(result);
}

module.exports = {deletesong,findbysinger,findbysong}