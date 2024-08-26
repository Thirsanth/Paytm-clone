const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://thirsanth:mother123@cluster0.b3q8b7l.mongodb.net/paytm?retryWrites=true&w=majority&appName=Cluster0");

const schema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        maxlength:50
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        maxlength:50
    },
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minlength:3,
        maxlength:30
    },
    password:{
        type:String,
        required:true,
        minlength:6
    }
})

const User = mongoose.model("User",schema);
module.exports={
    User
};