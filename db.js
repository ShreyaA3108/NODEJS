//Importing mongoose
const mongoose= require('mongoose');
require('dotenv').config();
//Defining MOngoDb connection url
//const mongoUrl=process.env.DB_URL_LOCAL
const mongoUrl=process.env.DB_URL
//Setup MongoDB connection
mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

//get the default connection
const db=mongoose.connection;

//define event listeners for database connection
db.on('connected', ()=>{
    console.log('Connected to MongoDb server');
});

db.on('error', (err)=>{
    console.error('Connection Error:',err);
});

db.on('disconnected', ()=>{
    console.log('MongoDb disconnected');
});

//Export the database connection
module.exports=db;