const express = require("express");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const router = express.Router();
const { User } = require("../db");

const JWT_SECRET = require("../config");
const signupSchema = zod.object({
    username:zod.string().email(),
    password:zod.string().min(6),
    firstname:zod.string(),
    lastname:zod.string()
})

router.post("/signup", async (req,res)=>{
    const body = req.body;

    const {success}  = signupSchema.safeParse(body);
    if(!success){
        return res.status(411).json({
            msg:"Email already taken / Incorrect inputs"
        })
    }
    const user = User.findOne({
        username:body.username
    })

    if(user){
        return res.status(411).json({
            msg:"Email already taken / Incorrect inputs"
        })
    }
    const dbUser = await User.create({
        username:body.username,
        password:req.body.password,
        firstname:req.body.firstname,
        lastname:req.body.lastname
    });
    const token = jwt.sign({
        userId:dbUser._id
    },JWT_SECRET)
    res.json({
        msg:"User create successfully",
        token:token
    })
})

const signinSchema = zod.object({
    username:zod.string().email(),
    password:zod.string()
})

router.post("/signin",async (req,res)=>{
    const body = req.body;
    const {success} = signinSchema.safeParse(body);

    if(!success){
        return res.status(411).json({
            msg:"Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username:body.username,
        password:body.password
    })

    if(user){
        const token = jwt.sign({
            userId:user._id
        },JWT_SECRET);
        res.status(200).json({
            token:token
        })
        return;
    }

    res.status(411).json({
        msg:"Error while logging in"
    })

})
module.exports=router;