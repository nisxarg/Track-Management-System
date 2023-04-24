var userdb = require('../model/model_user')
var organizerdb = require('../model/model_organizer')
var trackdb = require('../model/model_track')
var homedb = require('../model/model_home')
var teamdb = require('../model/model_team')
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
            res.status(400).send({ message: "Content can not be empty" });
            return;
        }

        // check if username already exists
        const username = req.body.username;
        const existingUser = await userdb.findOne({ username });
        if (existingUser) {
            res.status(300).send({ message: "Username already exists" });
            return;
        }
        const user = new userdb(req.body)
        // create new user
        await user.save(user)
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

exports.user_login = async (req, res) => {

    try {
        // check if organizer exists
        const user = await userdb.findOne({username: req.body.username});
        if(!user) return res.status(400).send('User not found');
        
        // check if password is correct
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword) return res.status(400).send('Invalid Password');
        
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

exports.organizer_signup = async (req, res) => {

    try {
        // validate request
        if (!req.body) {
            res.status(400).send({ message: "Content can not be empty" });
            return;
        }

        // check if username already exists
        const username = req.body.username;
        const existingorganizer = await organizerdb.findOne({ username });
        if (existingorganizer) {
            res.status(300).send({ message: "Username already exists" });
            return;
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

    await organizerdb.findOne({ username: username_ })
        .then(async data => {
            if (!data) {
                res.status(400).send({ message: `May be organizer not found` })
            }
            else {
                // res.status(200).send(data)
                let tokenData = {
                    username: username_
                };
                console.log(username_)
                const token = await jwt.sign(tokenData, "secret", { expiresIn: "1h" });
                console.log("token created");
                res.status(200).json({
                    status: true,
                    success: "SendData",
                    token: token,
                })
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error" })
        })
}
}
//    const username_ = req.params.username;

// await organizerdb.findOne({ username: username_ })
//     .then(data => {
//         if (!data) {
//             res.status(404).send({ message: `May be organizer not found` })

//         }
//         else {
//             // res.send(data)
//             res.status(200).send({ success: true })
//         }
//     })
//     .catch(err => {
//         res.status(500).send({ message: "Error" })
//     })

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

    await trackdb.findOne({ year: year_ })
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

    for (let j = 0; j < 3; j++) {

        if (user[j] != undefined) {
            try {
                const data = await userdb.findOne({ username: user[j] });
                if (data) {
                    count++;

                    var len = data.tracks.length;

                    for (let i = 0; i < len; i++) {
                        if (team.track_name == data.tracks[i].track_name) {
                            check = 1;
                        }
                    }

                } else {
                    flag = 1;
                }
            } catch (err) {
                return res.status(500).send({ message: "Errdor" });
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
                        track_name: team.track_name,
                        track_year: team.year_name
                    }

                    try {
                        await userdb.findOneAndUpdate(
                            { "username": name }, 
                            { $push: { "tracks": newTrack } }
                        );
                    } catch (e) {
                        console.error(e);
                    }
                    console.log("hiiii")

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

    const team_name_ = req.body.team_name;

    await teamdb.findOne({ team_name: team_name_ })
        .then(async data => {
            if (!data) {
                res.status(400).send({ message: `May be team not found` })

            }
            else {
                // res.status(200).send(data)
                let tokenData = {
                    team_name: team_name_
                };
                // console.log(team_name_ )
                const token = await jwt.sign(tokenData, "secret", { expiresIn: "1h" });
                console.log("token created");
                res.status(200).json({
                    status: true,
                    success: "SendData",
                    token: token,
                })
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error" })
        })
}


