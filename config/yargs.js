const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'a',
        default: 10
    }

}

const argv = require('yargs')
    .command('listar', 'Imprime en consola', opt)
    .command('crear', 'Genera un archivo', opt)
    .help()
    .argv

module.exports = {
    argv
}