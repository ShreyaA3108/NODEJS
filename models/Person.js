const mongoose=require('mongoose');

//define the person schema
const personSchema=new mongoose.Schema({
    Username: {
        type: String, 
        required: true
    },
    age:{
        type: Number,
        required:true
    },
    work:{
        type: String,
        enum: ['Chef','Waiter','Manager'],
        required:true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type:String,
    },
    salary:{
        type: Number,
        required: true
    }

});

//create person model
const Person=mongoose.model('Person',personSchema);
module.exports=Person;
