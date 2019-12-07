//============================
// PUERTO
//============================
process.env.PORT = process.env.PORT || 3000

//============================
// ENTORNO
//============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//============================
// BASE DE DATOS
//============================
let urlDB;

if (process.env.NODE_ENV === 'dev' ) {
    urlDB = 'mongodb://localhost:27017/cafe';
}
else{
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

//============================
// OPCIONES DE MONGOOSE
//============================

const optConnectMongoose = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }


//============================
// HEADERS
//============================

const allowCrossDomain = (req, res, next) =>{ 
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type'); 
    next();
}

//============================
// MODULE EXPORTS
//============================
module.exports = {
    allowCrossDomain,
    optConnectMongoose
}