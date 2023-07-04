const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

const jwtSecret = "let$g0Ye@!H";

//Route 1 : Create a User using: POST "/api/auth/createuser". Doesn't require Auth(login).

// validation
router.post(
  "/createuser",
  body("name").notEmpty().isLength({ min: 3 }).withMessage("Not a valid name"),
  body("email").isEmail().withMessage("Not a valid e-mail address"),
  body("password")
    .notEmpty()
    .isLength({ min: 5 })
    .withMessage("Not a valid password(atleast 5 characters)"),

  async (req, res) => {
    //  Check If everything is alright
    const result = validationResult(req);

    try {
      if (result.isEmpty()) {
        // if everything alright
        // check if email exist
        let user = await User.findOne({ email: req.body.email });
        if (user) {
          return res
            .status(400)
            .json({ error: "A user with this email aready exists" });
        }

        // encrypt password using bcrypt
        let salt = await bcrypt.genSalt(10);
        secPass = await bcrypt.hash(req.body.password, salt);

        //create a new user
        user = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: secPass,
        });
        const data = {
          user: {
            id: user.id,
          },
        };
        const authtoken = jwt.sign(data, jwtSecret);

        //res.json(user);
        res.json({ authtoken });
      }
      //errors on validation
      else {
        res.send({ errors: result.array() });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Error: check console for details");
    }
  }
);
// Route 2: Create a User using: POST "/api/auth/login". Doesn't require Auth(login).

router.post(
  "/login",
  body("email").isEmail().withMessage("Not a valid e-mail address"),
  body("password").notEmpty().withMessage("password cannot be blank"),
  async (req, res) => {
    const result = validationResult(req);

    try {
      if (result.isEmpty()) {
        const { email, password } = req.body;

        let user = await User.findOne({ email });
        if (!user) {
          return res.status(400).json({ error: "Invalid credentials" });
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
          return res.status(400).json({ error: "Invalid credentials" });
        }
        const data = {
          user: {
            id: user.id,
          },
        };
        const authtoken = jwt.sign(data, jwtSecret);
        res.json({ authtoken });
      } else {
        res.send({ errors: result.array() });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Error: check console for details");
    }
  }
);



//Route 1 : Create a User using: POST "/api/auth/getuser". require Auth(login).
router.post(
    "/getuser",
    body("email").isEmail().withMessage("Not a valid e-mail address"),
    body("password").notEmpty().withMessage("password cannot be blank"),
    async (req, res) => {
      const result = validationResult(req);
      
try {
    userId = "tksja"
    const user = await User.findById(userId).select("-password")
} catch (error) {
    console.error(error.message);
      res.status(500).send("Error: check console for details");
}

}
);


module.exports = router;
