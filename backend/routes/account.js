const express = require("express");
const { authMiddleware } = require("../middleware");
const { Account,User } = require("../db");
const mongoose = require('mongoose');
const router = express.Router();

router.get('/balance',authMiddleware,async (req,res)=>{
    const account = await Account.findOne({
        userId:req.userId
    });
    res.json({
        balance:account.balance
    })
})

router.post('/transfer',authMiddleware,async (req,res)=>{
    const session = await mongoose.startSession();
    session.startTransaction();
    const {to,amount} = req.body;
    const account = await Account.findOne({
        userId:req.userId
    }).session(session);
    if(!account || account.balance<amount){
        session.abortTransaction();
        res.status(400).json({
            msg:"Insufficient Balance"
        });
    }
    const toaccount = await Account.findOne({userId:to}).session(session);
    if(!toaccount){
        session.abortTransaction();
        res.status(400).json({
            msg:"Invalid Account"
        })
    }

    await Account.updateOne({userId:req.userId},{$inc:{balance:-amount}}).session(session);
    await Account.updateOne({userId:to},{$inc:{balance:account}}).session(session);

    await session.commitTransaction();
    res.status(200).json({
        msg:"Transaction Successfull"
    })

})


module.exports = router;