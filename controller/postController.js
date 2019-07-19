/*const express = require('express');
const bodyParser = require('body-parser');
//const postSchema=require('../model/postmodel')

const router = express.Router();//define router// sub control to express

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));
const mongoose=require('mongoose');


router.post('/createPost',(req,res,next) =>{
    var newPost= new postSchema(req.body);
    newPost.save(req.body,function(err,rows){
        if(err){
            res.status(500).json(err)({
            //err:err
        })
    }else{
        res.status(200).json({
            status:"success",
            data: rows
        })
    }
    })
});
router.get('/post',(req,res,next) =>{

    postSchema.find(function(err,rows){

        if(err){
            res.status(500).json({
                err:err
            })
        }else{
            res.status(200).json({

                status:"success",
                data: rows

            })
        }

    })
})
router.get('/',(req,res,next)=>{
    res.status(200).json("auth");
})
module.exports=router;*/