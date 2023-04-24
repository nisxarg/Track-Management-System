const express = require('express')
const route = express.Router()

const services = require('../services/render')
const controller = require('../controller/controller')


// API
route.get('/', controller.home)
route.post('/api/user_signup', controller.user_signup)
route.post('/api/user_login', controller.user_login)
route.post('/api/organizer_signup', controller.organizer_signup)
route.post('/api/organizer_login', controller.organizer_login)
route.post('/api/add_track', controller.add_track)
route.get('/api/track/', controller.find_track)
route.get('/api/:year', controller.find_year_track)
route.post('/api/team_signup', controller.team_signup)
route.post('/api/team_login', controller.team_login)



module.exports = route