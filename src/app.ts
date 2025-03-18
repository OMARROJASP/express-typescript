
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import estudiantesRoutes from './routes/estudiantesRoutes'
import routerProfesor from './routes/profesorRoutes';
import routerCurso from './routes/cursosRoutes';
import { Request, Response } from "express"


const app = express();

app.use(morgan("dev"));
app.use(cors());

app.get('/', (req:Request, res:Response) => {
    console.log("Hola mundo");
    res.send("Hola mundo")
})

app.use('/estudiantes', estudiantesRoutes);
app.use('/profesor', routerProfesor);
app.use('/curso', routerCurso);


export default app;