const express = require('express')
const route = express.Router()

const services = require('../services/render')
const controller = require('../controller/controller')


// API
route.get('/', controller.home)
route.post('/api/user_signup', controller.user_signup)
route.post('/api/user_login/:username', controller.user_login)
route.post('/api/organizer_signup', controller.organizer_signup)
route.post('/api/organizer_login/:username', controller.organizer_login)
// route.post('/save', controller.saveTodo)
// route.post('/update', controller.updateToDo)
// route.post('/delete', controller.deleteToDo)
// route.post('/api/student', controller.create_student)
// route.post('/api/company', controller.create_company)
// route.get('/api/student/:username', controller.find_student)
// route.get('/api/company/:company_name', controller.find_company)


module.exports = route