const express = require('express');
const app = express();
const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/authMiddleware");
const JWT_SECRET ="quiayktsytsh1@yiaaa5d521094"
const cors = require('cors');
app.use(cors());
require('dotenv').config();
app.set('view engine', 'ejs'); // Replace 'ejs' with your preferred view engine
app.set('views',  '../views');
app.use(express.urlencoded({extended:false}));
var nodemailer = require('nodemailer');
// user registration

router.post("/register", async (req, res) => {
  //console.log(req.body);
  try {
    // check if user already exists
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res
        .status(200)
        .send({ message: "User already exists", success: false });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    // create new user
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).send({
      message: "User created successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
});

// user login

router.post("/login", async (req, res) => {
  //console.log(req.body);
  try {
    // check if user already exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(200)
        .send({ message: "User does not exists", success: false });
    }

    // check password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res
        .status(200)
        .send({
          message: "Invalid password",
          success: false
        });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );


    res.send({
      message: "Login Successfull",
      success: true,
      data: token,
    });

  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
});

//forgot password
router.post("/forgot", async (req, res) => {
  const { email } = req.body;
  try {
    // check if user already exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ status: "User does not exist" });
    }
    //console.log(user);
    const secret = JWT_SECRET + user.password;
    const token = jwt.sign({ email: user.email, id: user._id }, secret, {
      expiresIn: "5m",
    });
    const link = `http://localhost:5000/api/users/reset-password/${user._id}/${token}`;
    console.log(link);
    

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  pert:465,
  secure:true,
  auth: {
    user: "learningspot4260@gmail.com",
    pass: "htnbafqskovvkibu",
  },
  tls: {
    rejectUnauthorized: false // Trust self-signed certificate
  }
});

var mailOptions = {
  from: '',
  to: email,
  subject: "Password reset",
  text: link,
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    return res.json({ status: "Mail Sent" });
  }
});

  } catch (error) {
      // res.status(500).send({
      //   message: error.message,
      //   data: error,
      //   success: false,
      //});
  }
});


router.get("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  //console.log(req.params);
  const user = await User.findOne({ _id:id});
  if (!user) {
    return res.json({ status: "User does not exist" });
  }
  const secret = JWT_SECRET + user.password;
  try {
    const verify = jwt.verify(token, secret);
    //console.log("verify",verify);
    //res.send("Verified");
    res.render("index",{email:verify.email,status:""})
  
  }catch(error){
    console.log(error);
    res.send("Not verified");
  }
 
 
});

router.post("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;
  const user = await User.findOne({ _id: id });
  if (!user) {
    return res.json({ status: "User does not exist" });
  }
  const secret = JWT_SECRET + user.password;
  try {
    const verify = jwt.verify(token, secret);
    //console.log(verify);
    const encryptPassword = await bcrypt.hash(password, 10);
    await User.updateOne({
      _id: id,
    },
      {
        $set: {
          password: encryptPassword,
        },
      }
    );
    res.json({status:"Password updated"});
   // res.render("index",{email:verify.email,status:"verified"});
  } catch (error) {
    res.json({status:"Something went wrong"});
  }
});


//get user info
router.post("/get-user-info", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    res.send({
      message: "User info fetched successfully",
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
});


module.exports = router;
