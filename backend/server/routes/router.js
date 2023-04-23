const express = require('express')
const route = express.Router()

const services = require('../services/render')
const controller = require('../controller/controller')


// API
route.get('/', controller.home)
route.post('/api/user_signup', controller.user_signup)
route.post('/api/user_login', controller.user_login)
route.post('/api/organizer_signup', controller.organizer_signup)
route.post('/api/organizer_login/:username', controller.organizer_login)
route.post('/api/add_track', controller.add_track)
route.post('/api/track/', controller.find_track)
route.post('/api/:year', controller.find_year_track)
// route.post('/api/login', controller.login)



module.exports = route