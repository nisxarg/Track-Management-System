var userdb = require('../model/model_user')
var organizerdb = require('../model/model_organizer')
var trackdb = require('../model/model_track')
var homedb = require('../model/model_home')
var teamdb = require('../model/model_team')
const axios = require("axios");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

exports.home = async (req, res) => {
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
        const user = await userdb.findOne({username: req.body.username});
        if(!user) return res.status(400).send({ message: "User not found" });
        
        // check if password is correct
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword) return res.status(400).send({ message: "Invalid Password" });
        
        // create and assign a token
        let tokenData = {
            username: user.username
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
            await userdb.findOneAndUpdate(
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
        if(!organizer) return res.status(400).send({ message: "Organizer not found" });
        
        // check if password is correct
        const validPassword = await bcrypt.compare(req.body.password, organizer.password);
        if(!validPassword) return res.status(400).send({ message: "Invalid Password" });
        
        // create and assign a token
        let tokenData = {
            username: organizer.username
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
                console.log("Printing data")
                console.log(existingdata)
                console.log("Printing year")
                console.log(typeof(existingdata.year),existingdata.year)

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
            }catch (e) {
                console.error(e);
            }
            const existingdata = await homedb.findOne({ year:find_year });
            //console.log(existingdata)
            res.send(data)
            // res.redirect('/')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating a create operation"
            });
        });

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