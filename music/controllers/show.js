const music = require('../models/music');

const show=async(req,res)=>{
    try{
    const result= await music.find();
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
    //  result.forEach(element => {
    // res.write(result[0])
    // });
    
}
catch(err){
    console.log(err);
    res.send(err);
}

}

module.exports = show;