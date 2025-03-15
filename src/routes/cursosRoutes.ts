import express from 'express';
import cursoController from '../controllers/cursoController';
const routerCurso = express.Router();


routerCurso.get('/', cursoController.consultar);
routerCurso.post('/', cursoController.ingresar);
routerCurso.post('/estudianteCurso', cursoController.asociarEstudiante);

routerCurso.route('/:id')
.get(cursoController.consultarDetalle)
.put(cursoController.actualizar)
.delete(cursoController.borrar);


export default routerCurso;