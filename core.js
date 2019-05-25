//REQUIRES
const fs = require('fs'); //Manejo de archivos

//FUNCIONES
let listaTareas = [];

const crear = (nombre) => {
    cargarDB();

    let tarea = {
        nombre,
        completado: false
    }

    listaTareas.push(tarea);

    try {
        guardarDB();
        return "Tarea creada exitosamente";
    } catch (error) {
        return "ocurrio un problema";
    }

}

const listar = () => {
    cargarDB();
    return listaTareas;
}

const actualizar = (nombre, completado) => {
    cargarDB();

    //Devuelve el index del elemento del arreglo que cumpla con la condicion
    let index = listaTareas.findIndex((tarea) => {
        return tarea.nombre === nombre;
    })

    //Si el indice es mayor a 0 quiere decir que encontró una tarea
    if (index > 0) {
        //Se actualiza la propiedad completado
        listaTareas[index].completado = completado;
        guardarDB();
        return "Tarea actualizada correctamente";
    } else {
        return "Ocurrió un problema al actualizar la tarea";
    }
}

//Interacción con la base de datos
const guardarDB = () => {
    //Convertir la data en un archivo json, arreglo de objetos
    let data = JSON.stringify(listaTareas);
    fs.writeFile('datos/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
    })
}

const cargarDB = () => {
    try {
        //Si el archivo esta vacio devolveria un error
        listaTareas = require('./datos/data.json');
    } catch (error) {
        listaTareas = [];
    }
}

//EXPORTANDO FUNCIONES
module.exports = {
    crear,
    listar,
    actualizar
}