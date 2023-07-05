const express = require('express');
const Notes = require("../models/Notes");
const fetchuser = require('../middleware/fetchuser');

const router = express.Router();


//Route 1 : get all notes of  a User using: get "/api/notes/fetchallnotes". require Auth(login).
router.get('/fetchallnotes',fetchuser,async (req,res)=>{
    const notes = await Notes.find({user: req.user.id});
    res.json(notes);
})
module.exports = router  