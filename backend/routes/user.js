const express = require("express");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const router = express.Router();
const { User, Account } = require("../db");
const { authMiddleware } = require("../middleware");
// router.use(authMiddleware);


const JWT_SECRET = require("../config");

const signupSchema = zod.object({
    username:zod.string().email(),
    password:zod.string().min(6),
    firstName:zod.string(),
    lastName:zod.string()
})

router.post("/signup", async (req,res)=>{
    const body = req.body;

    const {success}  = signupSchema.safeParse(body);
    if(!success){
        return res.status(411).json({
            msg:"Email already tabhbken / Incorrect inputs"
        })
    }
    const user = await User.findOne({
        username:req.body.username
    })

    if(user){
        return res.status(411).json({
            msg:"Email already takjjjen / Incorrect inputs"
        })
    }
    const dbUser = await User.create({
        username:body.username,
        password:req.body.password,
        firstName:req.body.firstName,
        lastName:req.body.lastName
    });
    const accupdate = await Account.create({
        userId:dbUser._id,
        balance:1+Math.random()*10000
    })
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
            token:token,
            firstName:user.firstName
        })
        return;
    }

    res.status(411).json({
        msg:"Error while logging in"
    })

})


const updateSchema = zod.object({
    password:zod.string().min(6),
    firstName:zod.string(),
    lastName:zod.string()
})

router.put('/',authMiddleware,async (req,res)=>{
    const body = req.body;
    const {success} = updateSchema.safeParse(body);
    if(!success){
        return res.status(411).json({
            msg:"Error while updating information"
        })
    }
    await User.updateOne({_id:req.userId},req.body);
    res.json({
        msg:"Updated successfully"
    })
})

router.get('/bulk',async(req,res)=>{
    const filter = req.query.filter || "";
    const users = await User.find({
        $or:[{
            firstName:{
                "$regex":filter // helps to filter the name.
            }
        },{
            lastName:{
                "$regex":filter
            }
        }]
    })

    res.json({
        user:users.map(user=>({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            _id:user._id
        }))
    })

})

module.exports=router;