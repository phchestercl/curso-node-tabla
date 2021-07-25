

const {crearArchivo} = require('./helpers/multiplicar');
const argv=require('./config/yargs');
console.clear();

/**
 * Recibir información desde la consdola
 */

/**
 * si lo ejecutamos : node app.js
 * 
 * el primer argunemto será dónde esta instalado node
 * el segundo argumento es el directorio dónde se está ejecutando la app
 * 
 * si lo ejecutamos como : node app --base=20
 * nos devolverá los dos primeros argumetnos mas 
 * '--base=20'
 * 
 * cómo obtenemos ese valor?
 * 
 * 
 */

/* const [,,arg3='base=5']=process.argv;
const [, base=5]=arg3.split('=');
 */

/* console.log(process.argv); */
console.log(argv);
/* console.log('base yargs', argv.base); */

/* console.log(base); */
/**
 * nunca se tiene que hacer de esta manera, es solo para fines educativos
 * 
 * de esta manera si ubiera un argumento adicional y se ponde primero, tendriamos que hacer el codigo para 
 * controlarlo, del mismo modo si se pone o no el simbolo =. etc
 * para manajera estos argumentos existe un paquete llamago yargs
 * 
 * 
 */

crearArchivo(argv.b,argv.l,argv.h)
    .then((nombreArchivo)=>{console.log(nombreArchivo+' creado')})
    .catch((e=>console.log(e)))
    ;
