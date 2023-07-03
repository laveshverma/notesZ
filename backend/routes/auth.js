const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator')

// Create a User using: POST "/api/auth/". Doesn't require Auth.
router.post('/',
    body('name').notEmpty().isLength({min:3 }).withMessage('Not a valid name'),
    body('email').isEmail().withMessage('Not a valid e-mail address'),
    body('password').notEmpty().isLength({min:5 }).withMessage('Not a valid password(atleast 5 characters)'),  
(req,res)=>{
    const result = validationResult(req);
    if (result.isEmpty()) {
    User.create({
      name: req.body.name,
      email:req.body.email,
      password: req.body.password,
     }).then(user => res.json(user));
    }
    else{
    res.send({ errors: result.array() }); 
    }  
}) ;
module.exports = router 