import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Estudiante {

    @PrimaryGeneratedColumn()
id:String;
@Column()
dni: String;
@Column()
nombre:String;

@Column()
email:String
}