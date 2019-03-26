if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}





const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
//Iniciando
const app = express();
require('./database');
//Setting
app.set('port', process.env.PORT || 3000);

//middleweares
app.use(morgan('dev'));
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads'),
  filename(req, file, cb){
  	cb(null, new Date().getTime() + path.extname(file.originalname));
  }
});
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended: false}));  // datos del frontend en formato json
app.use(express.json()); //entender las peticions en json sin que sena formularios

//Routes
app.use(require('./routes/books'));

// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));



//Comenzando el servidor
app.listen(app.get('port'), ()=>{
   console.log(`port in ${app.get('port')}`);
}); 