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
app.use(cors());
 
 //const helpers = require('./helpers');
 
 //const criteriaHandler = require('./CriteriaHandler');
 
 
 //const imageService = require('./apiServices');
 const Blob = require("cross-blob");
 
const storage = multer.diskStorage({
    destination : function(req,file,callback){
        callback(null, './uploads');
    },
    filename: function(req,file,callback){
        callback(null, file.originalname + '-' + Date.now());
    }
});

const upload = multer({ storage: multer.memoryStorage() });

    //var favicon = require('serve-favicon');
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
  password : 'test',
  database : 'photodb'
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
  console.log('connected');
});

app.get('/api', function (req, res) {
    var sql = "SELECT * FROM BlobTest";
    db.query(sql, function (err, result) {
      if (err) throw err;
      var results = [];
      result.forEach(element => {
        results.push(
          { 
            blobId: element.Id,
            name: element.Name,
            title: element.Title,
            description: element.Description,
            image: element.Value.toString('base64')
          }
        );
      });
      res.send(results);
    });
});

app.post('/api', upload.single('file'), function (req, res) {
  var sql = "INSERT INTO BlobTest SET ?",
    values = {
      name: req.body.name,
      title: req.body.title,
      description: req.body.description,
      value: req.file.buffer
    };
  db.query(sql, values, function (err, result) {
    if (err) throw err;
    res.send();
  });
});


app.post('/api/upload', upload.single('img'), function (req, res) {
    
	
	console.log("req in",req.body.imageObject.img);
	var dateTime = new Date(timeInMs);
	let upload = multer({ storage: storage, fileFilter: helpers.imageFilter }).single('img');
	console.log("req",req);
	
	var imageData = fs.readFileSync(req.file);
	
		console.log("insert file...........................................", imageData);
	
	
	console.log(req.body.imageObject.img);
	
	 if (req.body.imageObject.img) {
        console.log('Uploading file...');
        var filename = req.body.imageObject.img;
        var uploadStatus = 'File Uploaded Successfully';
    } else {
        console.log('No File Uploaded');
        var filename = 'FILE NOT UPLOADED';
        var uploadStatus = 'File Upload Failed';
    }
	
	console.log("After file check!!!!!!!!!!!!");
	
	 upload(req, res, function(err) {
       


    });
	
	if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });
    
      } else {
		  
		 upload(req,res,function(err) {
       
			if(err) {
				return res.end(errJson);
			}
			res.end("File is uploaded");
		});
        console.log('file received    ' + dateTime);
        return res.send({
          success: true
        })
      }
});

app.listen(3000);
