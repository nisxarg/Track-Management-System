const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDB = require('./server/database/connection')
const cors = require('cors')
const bodyparser = require('body-parser')

const app = express()

dotenv.config({path: 'config.env'})
const PORT = process.env.port || 5000

app.use(express.json())
app.use(cors())

//parse request to body-parser
app.use(bodyparser.urlencoded({extended: true}))

//connect to MongoDB
connectDB();

//load routers
app.use('/', require('./server/routes/router'))

module.exports = app

if(!module.parent){
app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})
}