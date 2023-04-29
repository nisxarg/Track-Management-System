const express = require('express')
const route = express.Router()

const services = require('../services/render')
const controller = require('../controller/controller')


// API
route.get('/', controller.home)
route.post('/admin', controller.admin_login)
route.post('/api/user_signup', controller.user_signup)
route.post('/api/user_login', controller.user_login)
route.post('/api/organizer_signup', controller.organizer_signup)  
route.post('/api/organizer_login/', controller.organizer_login)
// route.post('/api/add_track_admin', controller.add_track_admin)
route.post('/api/add_track_organizer', controller.add_track_organizer)
route.get('/api/track/', controller.find_track)
route.get('/api/year/:year', controller.find_year_track)
route.post('/api/team_signup', controller.team_signup)
route.post('/api/team_login', controller.team_login)
route.post('/api/add_home', controller.add_home)
route.post('/api/change_pwd', controller.change_pwd)
route.post('/api/update_track', controller.update_track)
route.post('/api/set_score', controller.set_score)
route.get('/api/leaderboard/', controller.get_leaderboard)
route.get('/api/admin_page', controller.admin_page)
route.post('/api/verify_track', controller.verify_track)




module.exports = route