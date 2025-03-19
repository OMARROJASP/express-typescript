import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Curso } from "./CursoModel";

@Entity('profesores')
export class Profesor {

@PrimaryGeneratedColumn()
id:String;
@Column()
dni: String;
@Column()
nombre:String;

@Column()
email:String

@Column()
profesion:String;

@Column()
telefono:String;

@CreateDateColumn()
createAt: Date;

@CreateDateColumn()
updateAt: Date;

@OneToMany(()=> Curso, (curso) => curso.profesor)
cursos: Curso[]

}