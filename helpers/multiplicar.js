const fs=require('fs');


const crearArchivo = async (base=5,listar,hasta)=>{
    try {
        hasta++;
        let msg='=====================\n';
           msg+='=====================\n';
           msg+=`Tabla del ${base}    \n`;
           msg+='=====================\n';
        for (let i = 1; i < hasta; i++) {
            (i<hasta)?msg = msg+`${base} x ${i} = ${base*i}\n`:msg = msg+`${base} x ${i} = ${base*i}`;
        }
        if (listar) console.log(msg);
        const archivo=`tabla-${base}.txt`;
        fs.writeFileSync('./salida/'+archivo,msg,'utf8');
        
        return archivo;
    } catch (error) {
        throw error;
    }
}
module.exports ={
    crearArchivo
}