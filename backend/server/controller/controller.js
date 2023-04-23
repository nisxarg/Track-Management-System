var userdb = require('../model/model_user')
var organizerdb = require('../model/model_organizer')
var trackdb = require('../model/model_track')
var homedb = require('../model/model_home')
var teamdb = require('../model/model_team')
const jwt =  require("jsonwebtoken")

exports.home = async(req, res) =>{
    // res.send("Hii...")
    res.status(200).send({success:true})
}

exports.user_signup = async(req, res) =>{

     //validate request
     if(!req.body){
        res.status(400).send({message: "Content can not be empty"});
        return;
        }

    //new user
    const user = new userdb(req.body)

    //save user in the database
    await user.save(user)
        .then(data=>{
            // res.status(200).send(data)  
            // res.redirect('/')
            res.status(200).send({success: true})
        })
        .catch(err=>{
            res.status(500).send({
                message: err.message || "Some error occured while creating a create operation"
            });
        });

}

exports.user_login = async(req, res) =>{

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
                const token = await jwt.sign(tokenData, "secret" , { expiresIn: "1h"});
                console.log("token created");
                res.status(200).json({
                    status:true,
                    success:"SendData",
                    token:token,
                })
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error" })
        })
}

exports.organizer_signup = async(req, res) =>{

    //validate request
    if(!req.body){
        res.status(400).send({message: "Content can not be empty"});
        return;
    }

    //new user
    const user = new organizerdb(req.body)

    //save user in the database
    await user.save(user)
        .then(data=>{
            res.send(data)  
            // res.redirect('/')
        })
        .catch(err=>{
            res.status(500).send({
                message: err.message || "Some error occured while creating a create operation"
            });
        });

}

exports.organizer_login = async(req, res) =>{

    const username_ = req.params.username;
    
    await organizerdb.findOne({ username: username_ })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `May be organizer not found` })

            }
            else {
                // res.send(data)
                res.status(200).send({ success: true })
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error" })
        })
}

exports.add_track = async(req, res) =>{

    //validate request
    if(!req.body){
        res.status(400).send({message: "Content can not be empty"});
        return;
    }

    //new user
    const track = new trackdb(req.body)

    //save track in the database
    await track.save(track)
        .then(data=>{
            res.send(data)  
            // res.redirect('/')
        })
        .catch(err=>{
            res.status(500).send({
                message: err.message || "Some error occured while creating a create operation"
            });
        });

}

exports.find_track = async(req, res) =>{

    const year = req.query.year
    const id = req.query._id;

    if(id===undefined)
    {
        await trackdb.find({ year: year })
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
    else
    {
        await trackdb.findOne({ year:year, _id: id })
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
    
}

exports.find_year_track = async(req, res) =>{

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

exports.team_signup = async(req,res) => {
     
    const team = req.body
    const user1 = team.teammate_1
    const user2 = team.teammate_2
    const user3 = team.teammate_3

    let count = 0, check = 0


    await userdb.findOne({ username: user1 })
        .then(data => {
            if (data) {
                count++

                var len = data.tracks.length

                for(let i=0; i<len; i++)
                {   
                    if(team.track_name==data.tracks[i].track_name)
                    {
                        console.log(team.track_name, data.tracks[i].track_name)
                        check = 1
                    }
                }
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error" })
        })  

        if(user2!=undefined)
        {
            await userdb.findOne({ username: user2 })
            .then(data => {
                if (data) {
                    count++

                    var len = data.tracks.length

                    for(let i=0; i<len; i++)
                    {   
                        if(team.track_name==data.tracks[i].track_name)
                        {
                            check = 1
                        }
                    }
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error" })
            })  
        }

        if(user3!=undefined)
        {
            await userdb.findOne({ username: user3 })
            .then(data => {
                if (data) {
                    count++

                    var len = data.tracks.length

                    for(let i=0; i<len; i++)
                    {   
                        if(team.track_name==data.tracks[i].track_name)
                        {
                            check = 1
                        }
                    }
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error" })
            })  
        }

        if(check==0)
        {
            const team = new teamdb(req.body)

            await team.save(team)
            .then(data=>{
                res.send(data)  
                // res.redirect('/')
            })
            .catch(err=>{
                res.status(500).send({
                    message: err.message || "Some error occured while creating a create operation"
                });
            });           
        }
        else
        {
            res.status(500).send("registration not possible")
        }

}

exports.team_login = async(req, res) =>{

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
                const token = await jwt.sign(tokenData, "secret" , { expiresIn: "1h"});
                console.log("token created");
                res.status(200).json({
                    status:true,
                    success:"SendData",
                    token:token,
                })
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error" })
        })
}


