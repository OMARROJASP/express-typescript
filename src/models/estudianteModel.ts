import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity('estudiantes')
export class Estudiante {
    static update(arg0: { id: number; }, body: any) {
        throw new Error("Method not implemented.");
    }
    static delete(arg0: { id: number; }, body: any) {
        throw new Error("Method not implemented.");
    }
    static save(body: any) {
        throw new Error("Method not implemented.");
    }
    static findOneBy(arg0: { id: number; }) {
        throw new Error("Method not implemented.");
    }
    static find() {
        throw new Error("Method not implemented.");
    }

    @PrimaryGeneratedColumn()
id:String;
@Column()
dni: String;
@Column()
nombre:String;

@Column()
email:String

@CreateDateColumn()
createAt: Date;

@CreateDateColumn()
updateAt: Date;




}