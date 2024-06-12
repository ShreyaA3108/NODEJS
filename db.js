//Importing mongoose
const mongoose= require('mongoose');

//Defining MOngoDb connection url
const mongoUrl='mongodb://127.0.0.1:27017/hotels'

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