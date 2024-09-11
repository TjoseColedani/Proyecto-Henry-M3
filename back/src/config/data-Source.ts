import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Appointment } from "../entities/Appointment";
import { Credential } from "../entities/Credential";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "TuriColedani",
    database: "gym_db",
    entities: [User,Credential,Appointment],
    synchronize: true,
    logging: false,
})


export const usersRepository =  AppDataSource.getRepository(User) 
export const credentialRepository = AppDataSource.getRepository(Credential)
export const appointmentRepository = AppDataSource.getRepository(Appointment)