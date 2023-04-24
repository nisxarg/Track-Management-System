const mongoose = require('mongoose')

//connecting to database
const connectDB = async()=>{
    try{
        //mongo connection string
        const uri = process.env.MONGO_URL;
        //console.log(uri);
        const con = await mongoose.connect("mongodb+srv://admin:admin@cluster0.jazg5jf.mongodb.net/TMS?retryWrites=true&w=majority")
        console.log(`MongoDB Connected: ${con.connection.host}`)
    }
    catch(err){
        console.log(err)
        process.exit(1)

    }
}

module.exports = connectDB