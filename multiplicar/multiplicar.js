const fs = require('fs')
const colors = require('colors')

let listadoTabla = (base, limite = 10) => {

    console.log('======================='.green);
    console.log(`tabla de ${ base }==`.green);
    console.log('======================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`)
    }
}


crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un Numero')
            return
        }

        let data = ''

        for (let i = 0; i <= limite; i++) {
            data += base + '*' + i + ' = ' + base * i + '\n'
        }

        fs.writeFile(`tablas/tabla-${ base } -al- ${limite}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${ base } -al- ${limite}.txt`)
        })
    })
}

module.exports = {
    crearArchivo,
    listadoTabla
}