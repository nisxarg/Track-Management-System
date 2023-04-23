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
    user.save(user)
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
    
    userdb.findOne({ username: username_ })
        .then(async data => {
            if (!data) {
                res.status(400).send({ message: `May be user not found` })

            }
            else {
               // res.status(200).send(data)
                let tokenData = {
                    username: username_ 
                };
                console.log(username_ )
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
            res.status(500).send({ message: "Error update user information" })
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
    user.save(user)
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
    
    organizerdb.findOne({ username: username_ })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `May be user not found` })

            }
            else {
                // res.send(data)
                res.status(200).send({ success: true })
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error update user information" })
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
    track.save(track)
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
                res.status(404).send({ message: `May be user not found` })

            }
            else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error update user information" })
        })
    }
    else
    {
        await trackdb.findOne({ year:year, _id: id })
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: `May be user not found` })
    
                }
                else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error update user information" })
            })

    }
    
}

exports.find_year_track = async(req, res) =>{

    const year_ = req.params.year;
    
    trackdb.findOne({ year: year_ })
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

exports.team_reg = async(req,res) => {
     
    const team = req.body
    //checking request ..
    // and then user list main track,year exist nahi karna chahiye.

}




// exports.login = async (req, res, next) => {

//     try {
//       const username_ = req.params.username;
//       userdb.findOne({ username: username_ })
//         .then(data => {
//             if (!data) {
//                 res.status(400).send({ message: `May be user not found` })
//             }
//             else {
//                 //res.status(200).send(data)
//                 let tokenData = {
//                     username: user.username
//                 };
//                 console.log(user.username)
//                 const token = jwt.sign(tokenData, "secret" , { expiresIn: "1h"});
//                 res.status(200).json({
//                     status:true,
//                     success:"SendData",
//                     token:token,
//                 })
//             }
//         })
//         .catch(err => {
//             res.status(500).send({ message: "Error update user information" })
//         })

//     } catch (error) {
//       res.status(400).json({
//         message: "An error occurred",
//         error: error.message,
//       })
//     }
//   }

