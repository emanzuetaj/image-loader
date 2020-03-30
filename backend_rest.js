let express = require('express')
let app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
let router = express.Router();
let http = require('http');
let server = http.Server(app);
var mongoose = require('mongoose');
 var multer = require('multer');
 var fs = require('fs');
 var nodemailer = require("nodemailer");
 
 const helpers = require('./helpers');
 
 const criteriaHandler = require('./CriteriaHandler');
 
 
 const imageService = require('./apiServices');
 const Blob = require("cross-blob");
 
const storage = multer.diskStorage({
    destination : function(req,file,callback){
        callback(null, './uploads');
    },
    filename: function(req,file,callback){
        callback(null, file.originalname + '-' + Date.now());
    }
});

const upload = multer({ storage : storage});

    var favicon = require('serve-favicon');
    var logger = require('morgan');
    var methodOverride = require('method-override');
    var session = require('express-session');
   


    var errorHandler = require('errorhandler');

const axios = require('axios');

const DIR = './uploads';
 

var whitelist = ['http://localhost:4200/register', 'https://source.unsplash.com/random/','http://localhost:4200/api']



const port = process.env.PORT || 5000;

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'courtpiece',
  database : 'chats'
});

var registeruserSchema = mongoose.Schema(
{    
    userId: String,    // userid which is foreign key from user table couchdb
    status :String, 
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});



db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
