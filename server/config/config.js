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



//============================
// VENCIMIENTO DEL TOKEN
//============================
// 60 seg
// 60 min
// 24 hs
// 30 d
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


//============================
// SEED DE AUTENTICACION
//============================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'


//============================
// MODULE EXPORTS
//============================
module.exports = {
    
    optConnectMongoose
}