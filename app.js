//request

//const fs = require('fs')
// const fs = require('express')
// const fs = require('./')


const argv = require('./config/yargs').argv
const colors = require('colors')



const { crearArchivo, listadoTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0]

switch (comando) {
    case 'listar':
        listadoTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado:`, colors.red(archivo)))
            .catch(e => console.log(e))
        break;

    default:
        console.log('Comando no reconocido.')
}


//let base = 'a'

//let argv = process.argv
// let parametro = argv[2]
// let base = parametro.split('=')[1]

//console.log(base)

//console.log(multiplicar)

// let argv2 = process.argv

// console.log('Limite', argv.limite)

// let data = ''

// for (let i = 0; i <= 10; i++) {
//     data += base + '*' + i + ' = ' + base * i + '\n'
// }

// fs.writeFile(`tablas/tabla-${ base }`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo table-${base}.txt ha sido creado`);
// })