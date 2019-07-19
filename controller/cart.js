const express = require('express');
const bodyParser = require('body-parser');
const cartSchema = require('../model/cartmodel');

const router = express.Router(); //define router// sub control to express


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
//const mongoose=require('mongoose');


router.post('/shop', (req, res, next) => {
    //from front end save it in db

    // var userJson = {
    //     name:req.body.name,
    //     price: req.body.price,

    // }; 

    var cart = new cartSchema(req.body)
    console.log(req.body);
    cart.save(function(err, result) {
        console.log(result);

        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json({
                status: "success",
                data: result
            })
        }
    })
});

/*router.post('/login',(req,res,next) => {
    var hash = bcrypt.hashSync(req.body.password,saltRounds);
    usersSchema.findOne({loginID:req.body.loginID},function(err,result){
        if(err){
            res.status(500).json(err);

        }else if(res!=null)
        {
            if(bcrypt.compareSync(req.body.password , hash))
            {
                console.log(res);
                res.status(200).json({
                    status:"success",
                    data:result,
                })
        
            }else{

                res.status(200).json({
                    status:"failure",
                    data:null
                })

            }
        }
        

    })*/



router.get('/shop', (req, res, next) => {

    cartSchema.find(function(err, rows) {

        if (err) {
            res.status(500).json({
                err: err
            })
        } else {
            res.status(200).json({

                status: "success",
                data: rows

            })
        }

    })
})



module.exports = router;