const express=require('express');
const app=express();
require('dotenv').config();
app.use(express.json());
const mongoose= require("mongoose");
const cors = require('cors');
app.use(cors());
const bcrypt =require("bcryptjs");
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
var nodemailer = require('nodemailer');
const dbConfig=require('./config/dbConfig');

const userRoute=require("./routes/usersRoute");
const examsRoute=require("./routes/examsRoute");
const reportsRoute=require("./routes/reportsRoute");

app.use("/api/users",userRoute);
app.use("/api/exams",examsRoute);
app.use("/api/reports",reportsRoute);

const usersRoute = require('./routes/usersRoute');
app.use('/api/users', usersRoute);

const port=process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`server listening on port ${port}`);
})
