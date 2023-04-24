const mongoose = require('mongoose')


//connecting to database
const connectDB = async()=>{
    try{
        //mongo connection string
        const con = await mongoose.connect("mongodb+srv://admin:admin@cluster0.jazg5jf.mongodb.net/TMS?retryWrites=true&w=majority")

        console.log(`MongoDB Connected: ${con.connection.host}`)
    }
    catch(err){
        console.log(err)
        process.exit(1)

    }
}

module.exports = connectDB

// const mongoose = require('mongoose');
// const uri = "mongodb+srv://admin:admin@cluster0.jazg5jf.mongodb.net/TMS?retryWrites=true&w=majority";

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to database');
//   })
//   .catch((error) => {
//     console.error('Error connecting to database:', error);
//   });