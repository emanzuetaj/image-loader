const updateGalleryTable = function updateTable(req,res){
	
	let upload = multer({ storage: storage, fileFilter: helpers.imageFilter }).single('img');
	

	console.log("Username..............................",req.body.imageObject.username);
	
	var cat = {
    photo_value: fs.readFileSync("C:\\server.png"),
    username: req.body.username
};
	
	var query = db.query('INSERT INTO photo_album SET ?', cat, function(err,
    result) {
    console.log(result);
});

