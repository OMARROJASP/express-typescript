import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Profesor } from "./profesoresModel";
import { Estudiante } from "./estudianteModel";

@Entity('cursos')
export class Curso {

@PrimaryGeneratedColumn()
id: number;

@Column()
nombre: String;

@Column('text')
descripcion: String;

@CreateDateColumn()
createAt: Date;

@CreateDateColumn()
updateAt: Date;

@ManyToOne(() => Profesor, (profesor) => profesor.cursos)
@JoinColumn({name: 'profesor_id'})
profesor: Profesor


@ManyToMany(() => Estudiante)
@JoinTable({
    name: 'cursos_estudiantes',
    joinColumn: {name: 'curso_id'},
    inverseJoinColumn:{name: 'estudiante_id'}
})
estudiantes: Estudiante[];
}