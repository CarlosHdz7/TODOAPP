const nombre = {
    demand: true,
    alias: 'n'
}

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', nombre)
    .command('actualizar', 'Actualiza una tarea a completado', {
        nombre,
        completado: {
            alias: 'c',
            default: true
        }
    })
    .command('borrar', 'Borra una tarea de la lista', {
        nombre
    })
    .help()
    .argv;

module.exports = {
    argv
}