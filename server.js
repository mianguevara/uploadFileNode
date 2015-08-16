	var express =require("express"),
	app=express(),
 	bodyParser = require('body-parser'); 
	var multer = require("multer");
	server=require('http').createServer(app),
	path = require("path");
	app.set('view engine','jade');
	app.use(express.static('./public'));
	
	//Funciones importantes para subir archivos
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended:false}));
	//var upload = multer({ dest: './public/uploads' })
		
	app.get('/',function  (req, res) {
		res.render("index");
	});

	var storage = multer.diskStorage({
	  destination: function (req, file, cb) {
	    cb(null, './public/uploads')
	  },
	  filename: function (req, file, cb) {
	    cb(null, file.originalname)
	  }
	});

	var upload = multer({ storage: storage })

	//var fs=require('fs');//requerir modulo del sistema para escribir Archivos 
	app.post('/subir',upload.single("miarchivo"),function (req,res) {
		
	
		/*var tmp_path=req.body.miarchivo.path;//ruta del archivo
		var tipo=req.body.miarchivo.type;//tipo del archivo
		
		if(tipo=='image/png' || tipo=='image/jpg' || tipo=='image/jpeg' ){

			var nombrearchivo=req.body.miarchivo.name;//nombre del archivo 

			var target_path='./public/uploads/'+nombrearchivo;// hacia donde subiremos nuestro archivo dentro de nuestro servidor
			fs.rename(tmp_path,target_path,function (err) {//Escribimos el archivo
				//fs.unlink(tmp_path,function (err) {//borramos el archivo tmp
					//damos una respuesta al cliente
					res.send('<p>El archivo se subio correctamente</p></br><img  src="./uploads/'+nombrearchivo+'"/>');
				//});
			});

		}else{
			res.send('Tipo de archivo no soportado');
		}
*/
	});


	server.listen(3000);