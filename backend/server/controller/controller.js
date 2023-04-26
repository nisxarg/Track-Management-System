var userdb = require('../model/model_user')
var organizerdb = require('../model/model_organizer')
var trackdb = require('../model/model_track')
var homedb = require('../model/model_home')
var teamdb = require('../model/model_team')
var leaderdb = require('../model/model_leaderboard')

const axios = require("axios");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

exports.home = async (req, res) => {it 
    // res.send("Hii...")
    res.status(200).send({ success: true })
}

exports.user_signup = async (req, res) => {
    try {
        // validate request
        if (!req.body) {
            return res.status(400).send({ message: "Content can not be empty" });
        }

        // check if username already exists
        const username = req.body.username;
        const password = req.body.password;
        const existingUser = await userdb.findOne({ username });
        if (existingUser) {
            return res.status(400).send({ message: "Username already exists" });
        }

        const user = new userdb(req.body)
        // create new user
        await user.save(user)
            .then(async data => {

                try {
                    const r = await axios.post(
                        "https://api.chatengine.io/users/",
                        { username : username, secret : password,first_name : username},
                        { headers: { "Private-Key": process.env.CHAT_ENGINE_PRIVATE_KEY } }
                    );
                } catch (e) {
                }
                res.status(200).send(data)
            })
    }
    catch (err) {
        console.error(err);
        res.status(500).send({ message: "Internal server error" });
    }
}

exports.user_login = async (req, res) => {

    try {

        if (!req.body) {
            return res.status(400).send({ message: "Content can not be empty" });
        }

        // check if user exists
        const user = await userdb.findOne({ username: req.body.username });
        if (!user) return res.status(400).send('User not found');

        // check if password is correct
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).send('Invalid Password');

        // create and assign a token
        let tokenData = {
            username: user.username
        };

        const token = await jwt.sign(tokenData, "secret", { expiresIn: "1h" });
        console.log("token created");

        const username = user.username
        const password = user.password

        try {
            const r = await axios.get("https://api.chatengine.io/users/me/", {
              headers: {
                "Project-ID": process.env.CHAT_ENGINE_PROJECT_ID,
                "User-Name": username,
                "User-Secret": password,
              },
            });
          } catch (e) {
          }

        res.status(200).json({
            status: true,
            success: "SendData",
            token: token,
        })

    } catch (err) {
        return res.status(500).send('error');
    }
}

exports.change_pwd = async(req,res) => {
       
    try{

        if (!req.body) {
            res.status(400).send({ message: "Content can not be empty" });
            return;
        }

        const user = await userdb.findOne({username: req.body.username});
        if(!user) return res.status(400).send('User not found');
        
        const old_password = req.body.old_password
        const new_password = req.body.new_password
        // check if password is correct
        const validPassword = await bcrypt.compare(old_password, user.password);

        const salt= await(bcrypt.genSalt(10));
        const hashPass=await bcrypt.hash(new_password,salt);

        if(!validPassword) {
            return res.status(400).send('Invalid Password');
        }
        else{
            await    userdb.findOneAndUpdate(
                { "username" : user.username }, //filtering
                { $set : {  
                    "password" : hashPass
                }}
            )
            return res.status(200).send('update succesfull');

        }


    }
    catch(err){
        return res.status(500).send('error');
    }

}

exports.organizer_signup = async (req, res) => {

    try {
        // validate request
        if (!req.body) {
            return res.status(400).send({ message: "Content can not be empty" });
        }

        // check if username already exists
        const username = req.body.username;
        const existingorganizer = await organizerdb.findOne({ username });
        if (existingorganizer) {
            return res.status(300).send({ message: "Username already exists" });
        }

        //check if track name is already in database or not

        const year_ = new Date(req.body.start_date).getFullYear();
        const name_code_ = req.body.track_name

        const data = await trackdb.findOne({name_code:name_code_, year:year_.toString()})

        if(data)
        {
            return res.status(300).send('Track name already exists')
        }

        const organizer = new organizerdb(req.body)
        // create new organizer

        await organizer.save(organizer)
            .then(data => {
                res.send(data)
                // res.redirect('/')
            })
    }
    catch (err) {
        console.error(err);
        res.status(500).send({ message: "Internal server error" });
    }

}

exports.organizer_login = async (req, res) => {
    try {
        // check if organizer exists
        const organizer = await organizerdb.findOne({username: req.body.username});
        if(!organizer) return res.status(400).send('Oraganizer not found');
        
        // check if password is correct
        const validPassword = await bcrypt.compare(req.body.password, organizer.password);
        if(!validPassword) return res.status(400).send('Invalid password');
        
        // create and assign a token
        let tokenData = {
            username: organizer.username
        };

        const token = await jwt.sign(tokenData, "secret", { expiresIn: "1h" });
        console.log("token created");

        const track_list_ = 
            [
                {
                    name_code: "functional Track",
                    year: "2022"
                },
                {
                    name_code: "testing_for_leaderboard",
                    year: "2010"
                },
                {
                    name_code: "testing_for_leaderboard1",
                    year: "2010"
                }
                
            ]


        res.status(200).json({
            status: true,
            success: "SendData",
            token: token,
            track_list : track_list_
        })


    } catch (err) {
        return res.status(500).send('error');

    }
 
} 
exports.add_track = async (req, res) => {

    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty" });
        return;
    }
    const tracke = new trackdb(req.body)
    const find_year = tracke.year;
    const tn = tracke.name_code;
   
    await tracke.save(tracke)
        .then(async data => {
            
            try{
                // console.log("i am at update track")
                const existingdata = await homedb.findOne({ year : find_year });

                await homedb.findOneAndUpdate(
                    { "year" : find_year }, //filtering
                    { $push : {  
                        "content.tracks.list" : 
                        {
                            "text" : tracke.name_code,
                            "link" : "jaymataji"
                         }}
                        }
                )

                const new_leaderboard = 
                {
                    "track_name": tn,
                    "track_year": find_year
                }

             const leader_insert = new leaderdb(new_leaderboard)
            

             await leader_insert.save(leader_insert)
             .catch(e =>{
                console.error(e);
             })
             

            }catch (e) {
                console.error(e);
            }
            const existingdata = await homedb.findOne({ year:find_year });

            res.send(data)

        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating a create operation"
            });
        });

}


exports.update_track = async (req, res) => {

    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty" });
        return;
    }
    const tracke = new trackdb(req.body)
    console.log("Printing track details")
    console.log(tracke)
    
    const find_year = tracke.year;
    const tn = tracke.name_code;
    const tag_ = tracke.tag;
    const sidebar_ = tracke.sidebar;
    const importantDates_ = tracke.importantDates;
    const content_ = tracke.content;
   
            try{
                // console.log("i am at update track")
                // const existingdata = await db.findOne({ year : find_year });
                // console.log("Printing data")
                // console.log(existingdata)
                // console.log("Printing year")
                // console.log(typeof(existingdata.year),existingdata.year)
                await trackdb.findOneAndUpdate(
                    { "year" : find_year, "name_code" : tn}, //filtering
                    { $set : {  
                        "tag" : tag_,
                        "sidebar" : sidebar_,
                        "importantDates" : importantDates_,
                        "content" :  content_
                        }
                    }
                )
            }catch (e) {
                console.error(e);
            }
            

}

exports.add_home = async(req,res)=>{

    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty" });
        return;
    }

    const user = new homedb(req.body)
    console.log(user)

    //save user in the database
    await user.save(user)
        .then(data => {
            res.send(data)
            // res.redirect('/')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating a create operation"
            });
        });


}

exports.find_track = async (req, res) => {

    const year = req.query.year
    const name_code_ = req.query.name_code;

    await trackdb.findOne({ year: year, name_code: name_code_ })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `May be track not found` })

            }
            else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error" })
        })

}

exports.find_year_track = async (req, res) => {

    const year_ = req.params.year;

    await homedb.findOne({ year: year_ })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `May be track not found` })
            }
            else {
                res.send(data)
                // res.status(200).send({ success: true })
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error" })
        })

}

exports.team_signup = async (req, res) => {
    const team = req.body;
    const user = [team.teammate_1, team.teammate_2, team.teammate_3];
    let count = 0,
        check = 0,
        flag = 0;
    var userdata = [];

    //team name already exists
    const team_name_ = team.team_name
    const track_name_ = team.track_name
    const year_ = team.track_year

    const data = await teamdb.findOne({team_name: team_name_, track_name:track_name_, track_year:year_})

    if(data)
    {
        return res.status(300).send('Team name already exists')
    }


    for (let j = 0; j < 3; j++) {

        if (user[j] != undefined) {
            try {
                const data = await userdb.findOne({ username: user[j] });
                if (data) {
                    count++;

                    var len = data.tracks.length;

                    for (let i = 0; i < len; i++) {
                        if (track_name_ == data.tracks[i].track_name && year_==data.tracks[i].track_year) {
                            check = 1;
                        }
                    }

                } else {
                    flag = 1;
                }
            } catch (err) {
                return res.status(500).send({ message: "Err" });
            }
        }
        if (flag) return res.status(500).send("User not found");
    }

    if (count >= 1 && check == 0) {
        for (let j = 0; j < 3; j++) {
            if (user[j] != undefined) {
                try {

                    const check = await userdb.findOne({ username: user[j] });
                    const name = check.username;

                    const newTrack = {
                        track_name: track_name_,
                        track_year: year_
                    }

                    try {
                        await userdb.findOneAndUpdate(
                            { "username": name }, // Filter to find the user with matching username
                            { $push: { "tracks": newTrack } }
                        );
                    } catch (e) {
                        console.error(e);
                    }

                    const data2 = await userdb.findOne({ username: user[j] });
                    console.log(data2)

                    if (data2) {
                    } else {
                    }
                } catch (err) {
                    return res.status(500).send({ message: "Error" });
                }
            }
        }


        const teamData = new teamdb(req.body);
        try {
            const data = await teamData.save();

            await leaderdb.findOneAndUpdate(
                {"track_name": track_name_, "track_year": year_},
                {
                    $push :{
                        "team_and_score":{
                            "team_name": team_name_,
                            "team_score": 0
                        }
                    }
                })
            
            res.send(data);
        } catch (err) {
            res.status(500).send({
                message: err.message || "Some error occured while creating a create operation",
            });
        }
    } else {
        res.status(500).send("registration not possible");
    }
};


exports.team_login = async (req, res) => {

    try {
        // check if organizer exists
        const team = await teamdb.findOne({team_name: req.body.team_name});
        if(!team) return res.status(400).send('Team not found');
        
        // check if password is correct
        const validPassword = await bcrypt.compare(req.body.team_password, team.team_password);
        if(!validPassword) return res.status(400).send('Invalid Password');
        
        // create and assign a token
        let tokenData = {
            team_name: team.team_name
        };

        const token = await jwt.sign(tokenData, "secret", { expiresIn: "1h" });
        console.log("token created");
        res.status(200).json({
            status: true,
            success: "SendData",
            token: token,
        })

    } catch (err) {
        return res.status(500).send('error');
    }
}

exports.set_score = async (req, res) => {

    const new_score = req.body.score
    const track_name_ = req.body.track_name
    const track_year_ = req.body.track_year
    const team_name_ = req.body.team_name

    try {
        const data = await leaderdb.findOne(
            { "track_name" : track_name_, "track_year" : track_year_, "team_and_score" : {$elemMatch: { "team_name": team_name_}}}
        ) 

        var len = data.team_and_score.length
        var id 

        for(let i=0; i<len; i++)
        {
            if(data.team_and_score[i].team_name==team_name_)
            {
                id = data.team_and_score[i]._id;
                break;
            }
        }
        
        const data1 = await leaderdb.findOneAndUpdate(
            {"team_and_score" :{$elemMatch: { "_id": id}}},
            {
                $set:{
                    "team_and_score.$.team_score" : new_score
                }
            }
        )

        res.send({new_score: new_score})

    } catch (err) {
        return res.status(500).send('error');
    }
}

exports.leaderboard = async (req, res) => {
    
    try {
        
        const track_name_ = req.query.track_name
        const track_year_ = req.query.track_year

        const data = await leaderdb.findOne({track_name:track_name_, track_year:track_year_})

        console.log(data)

        const team_data = data.team_and_score

        team_data.sort((a,b) => a.team_score - b.team_score)

        res.send(team_data)

    } catch (err) {
        return res.status(500).send('error');
    }
}