import { Request, Response } from "express";
import { Estudiante } from "../models/estudianteModel";


class EstudiantesController {
    constructor() {

    }

    async consultar(req: Request, res: Response) {
        try {
            const data = await Estudiante.find();
            res.status(200).json(data);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }

    }

    async consultarDetalle(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const registro = await Estudiante.findOneBy({ id: Number(id) });
            // if (!registro) {
            //     throw new Error('Estudiante no encontrado');
            // }

            res.status(200).json(registro);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    async ingresar(req: Request, res: Response) {
        try {
            const registro = await Estudiante.save(req.body);
            res.status(201).json(registro);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    async actualizar(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const registro = await Estudiante.findOneBy({ id: Number(id) });
            // if (!registro) {
            //     throw new Error('Estudiante no encontrado');
            // }
            await Estudiante.update({ id: Number(id) }, req.body);
            const registroActualizado = await Estudiante.findOneBy({ id: Number(id) });
            res.status(200).json(registroActualizado);
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }
    async borrar(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const registro = await Estudiante.findOneBy({ id: Number(id) });
            
            // if (!registro) {
            //     return res.status(404).json({ message: 'Estudiante no encontrado' });
            // }
            
            // Opción 1: Si delete requiere 2 argumentos
            await Estudiante.delete({ id: Number(id) }, {});
            // O alternativamente, si tu versión de TypeORM es diferente
            // await Estudiante.delete({ id: Number(id) });
            
            // Completa la respuesta con send()
            return res.status(204).send();
        } catch (err) {
            if (err instanceof Error)
                return res.status(500).send(err.message);
            return res.status(500).send("Error desconocido");
        }
    }
}

export default new EstudiantesController();