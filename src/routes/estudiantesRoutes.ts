import express from 'express'
import estudianteController from '../controllers/estudianteController.';
const router = express.Router();


router.get('/', estudianteController.consultar);
router.post('/', estudianteController.ingresar);

router.route('/:id')
.get(estudianteController.consultarDetalle)
.put(estudianteController.actualizar)
.delete(estudianteController.borrar)

export default router;
