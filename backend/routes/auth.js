const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator')

// Create a User using: POST "/api/auth/". Doesn't require Auth(login).

  // validation 
router.post('/createuser',
    body('name').notEmpty().isLength({min:3 }).withMessage('Not a valid name'),
    body('email').isEmail().withMessage('Not a valid e-mail address'),
    body('password').notEmpty().isLength({min:5 }).withMessage('Not a valid password(atleast 5 characters)'),  
(req,res)=>{
//  Check If everything is alright
    const result = validationResult(req);
    async function createUser () { 
   
        if (result.isEmpty()) {
// if everything alright
        // check if email exist
    let user = await User.findOne({email: req.body.email});
    if (user){
        return res.status(400).json({error:"A user with this email aready exists"})
    }   
    user = await User.create({
      name: req.body.name,
      email:req.body.email,
      password: req.body.password,
     }).then(user => res.json(user))
   
    }
//errors on validation
    else{
    res.send({ errors: result.array() }); 
    }  

}
try{
createUser();
    } catch (error){
        console.error(error.message);
        res.status(500).send("Error: check console for details")
    }

}) ;

module.exports = router 