	var express =require("express");
	var multer = require("multer");
	bodyParser = require('body-parser'); 
	path = require("path");
	var app=express();
	//var app = module.exports = express();
	//server=require('http').createServer(app);
	app.set('view engine','jade');
	app.use(express.static('./public'));
	
 	
	//var port = process.env.PORT || 3000;

	//Funciones importantes para subir archivos
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended:false}));

		
	app.get('/',function  (req, res) {
		res.render("index");
		//res.send('Hello World');
	});

	var storage = multer.diskStorage({
	  destination: function (req, file, cb) {
	    cb(null, './public/uploads')
	  },
	  filename: function (req, file, cb) {
	    cb(null, file.originalname)
	  }
	});

	var limits = { fileSize: 1024 * 1024 *1024};

	var fileFilter = function(req, file, cb) {
		
	    if (path.extname(file.originalname) !== '.mp3') {
	      	return cb(null, false);

	    }
	    else{
	    	cb(null, true)
	    }	
	  };
  

	var upload = multer({ storage: storage,
						limits: limits,
						fileFilter: fileFilter

						 });

	app.post('/subir', upload.single("miArchivo"),function (req,res) {
		
		  if (req.uploadError) {
		    return res.end('Error uploading your new avatar')
		  }

		  res.end('You new avatar is uploaded')

	});

	app.listen(3000);

	