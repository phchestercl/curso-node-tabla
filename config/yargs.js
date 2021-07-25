const { options } = require('yargs');
const argv = require('yargs')
        .option('b',{
            alias:'base',
            type:'number',
            demandOption:true,
            describe:'Numero base para la multiplicaciòn, es un argumento rerquerido como -b o --base'
        })
        .option('h',{
            alias:'hasta',
            type:'number',
            demandOption:false,
            default:10,
            describe:'Numero hasta el cual se realizará la multiplicación, es un argumento rerquerido como -h o --hasta'
        })
        .option('l',{
            alias:'Listar',
            type:'boolean',
            default: false,
            demandOption:false,
            describe:'Indica si se desea una salida por pantalla de la tabla'
        })
        .check((argv,options)=>{
            if(isNaN(argv.b)) { 
                throw 'La base tiene que ser un número';
            }
            if(isNaN(argv.h)) { 
                throw 'El valor de hasta debe ser un número';
            }
            return true;

        })
        .argv;
module.exports=argv;