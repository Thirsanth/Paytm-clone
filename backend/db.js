const mongoose = require("mongoose");
const { object, string, number } = require("zod");

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

const accountsschema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
})

const User = mongoose.model("User",schema);
const Account = mongoose.model("Accounts",accountsschema);
module.exports={
    User,
    Account
};