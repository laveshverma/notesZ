const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator')

// Create a User using: POST "/api/auth/". Doesn't require Auth.
router.post('/',
    body('name').notEmpty().isLength({min:5 }),
    body('email').isEmail(),
      body('password').notEmpty().isLength({min:5 }),  
(req,res)=>{
    const result = validationResult(req);
    if (result.isEmpty()) {
      return res.send(`Hello, ${req.body.name}!`);
    }
  
    res.send({ errors: result.array() });

})
module.exports = router 