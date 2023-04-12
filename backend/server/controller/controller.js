var userdb = require('../model/model_user')
var organizerdb = require('../model/model_organizer')

exports.home = async(req, res) =>{
    res.send("Hii...")
}

exports.user_signup = async(req, res) =>{

     //validate request
     if(!req.body){
        res.status(400).send({message: "Content can not be empty"});
        return;
        }

    //new user
    const user = new userdb({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        phone_no: req.body.phone_no
        
    })

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

exports.user_login = async(req, res) =>{

    const username_ = req.params.username;
    
    userdb.findOne({ username: username_ })
        .then(data => {
            if (!data) {
                res.status(400).send({ message: `May be user not found` })

            }
            else {
                res.send(data)
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
    const user = new organizerdb({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        phone_no: req.body.phone_no
        
    })

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
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error update user information" })
        })
}