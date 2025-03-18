import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "Rojas#$70",
    database: "api_express",
    synchronize: true,
    logging: true,
    entities: [],
    migrations: [],
})


