var userdb = require('../model/model_user')
var organizerdb = require('../model/model_organizer')
var trackdb = require('../model/model_track')
var homedb = require('../model/model_home')
var teamdb = require('../model/model_team')
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

    const username_ = req.body.username;

    await userdb.findOne({ username: username_ })
        .then(async data => {
            if (!data) {
                res.status(400).send({ message: `May be user not found` })

            }
            else {
                // res.status(200).send(data)
                let tokenData = {
                    username: username_
                };
                // console.log(username_ )
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

exports.organizer_signup = async (req, res) => {

    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty" });
        return;
    }

    //new user
    const user = new organizerdb(req.body)

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

exports.organizer_login = async (req, res) => {

    const username_ = req.body.username;

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
<<<<<<< HEAD
                console.log(username_)
=======
                console.log(username_ )
>>>>>>> fe6eda16e40559708b46a83991d12e08dd3d9081
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

    //new user
    const track = new trackdb(req.body)

    //save track in the database
    await track.save(track)
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


                    // userdata[j] = data.tracks;
                    // console.log(userdata[j])
                    // userdata[j].push({
                    //     track_year: team.year_name,
                    //     track_name: team.track_name
                    //   });

                    // console.log(userdata[j])

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

                    console.log("hiiii")
                    //    try
                    //     userdb.findOneAndUpdate(
                    //         { "username" : name }, // Filter to find the user with matching username
                    //         { $push: { "tracks": newTrack } }, // Add new track to 'tracks' array of found user
                    //         { new: true }, // Return the updated document after update is applied
                    //         (err, user) => {
                    //             if (err) {
                    //                 console.error(err);
                    //             } else if (user) {
                    //                 console.log(`Added new track to user ${user.username}: ${newTrack.track_name}`);
                    //                 // Do something with the updated user object here
                    //             } else {
                    //                 console.log(`User with username ${username} not found.`);
                    //             }
                    //         }
                    //     );
                    try {
                        await userdb.findOneAndUpdate(
                            { "username": name }, // Filter to find the user with matching username
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


