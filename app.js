//Incluyendo librerias y archivos
const argv = require('./config/yargs').argv;
const funciones = require('./core');
const colors = require('colors');


let opcion = argv._[0];

switch (opcion) {
    case 'crear':
        let mensaje = funciones.crear(argv.nombre);
        console.log(mensaje);
        break;

    case 'listar':
        let tareas = funciones.listar();
        console.log('========================================'.inverse.bold);
        console.log('========       TAREAS         =========='.inverse.bold);
        console.log('========================================\n'.inverse.bold);
        tareas.forEach(element => {
            console.log('Nombre: '.bold + element.nombre.green);
            console.log('Completado: '.bold + element.completado);
        });
        console.log('========================================'.inverse.bold);

        break;

    case 'actualizar':
        let mensaje2 = funciones.actualizar(argv.nombre, argv.completado)
        console.log(mensaje2);
        break;

    case 'borrar':
        break;

    default:
        break;
}