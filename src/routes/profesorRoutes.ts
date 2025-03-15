import express from 'express'
import profesorController from '../controllers/profesoresController';
const routerProfesor =express.Router();


routerProfesor.get('/', profesorController.consultar);
routerProfesor.post('/', profesorController.ingresar);

routerProfesor.route('/:id')
.get(profesorController.consultarDetalle)
.put(profesorController.actualizar)
.delete(profesorController.borrar)

export default routerProfesor;