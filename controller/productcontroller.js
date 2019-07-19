const express = require('express');
const bodyParser = require('body-parser');
const productSchema = require('../model/productmodel');


const router = express.Router(); //define router// sub control to express


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
//const mongoose=require('mongoose');


router.post('/order', (req, res, next) => {
 
console.log("you have reached the db here,congrats",req.body);
    var cart1 = new productSchema(req.body)
    console.log(req.body);
    cart1.save(function(err, result) {
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





router.get('/order', (req, res, next) => {
    console.log(res.body);

    productSchema.find(function(err, rows) {

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