import { ICredentialDto } from "../dtos/ICredentialDto";
import { createCredentialService } from "./credentialsService";
import { IUserDto } from "../dtos/IUserDto";
import { User } from "../entities/User";
import { AppDataSource, appointmentRepository, usersRepository } from "../config/data-Source";
import { validateCredentialService } from "./credentialsService";
import { Appointment } from "../entities/Appointment";



export const getAllUsersService = async () => {
    
    const allUsers: User[] = await usersRepository.find();
    return allUsers;
    
    /* const allUsers: IUser[] = users; // peticion a la BDD
    return allUsers; */
}

export const getUserByIdService = async (userId: number): Promise <User | null> => {
    const user = await usersRepository.findOneBy({id: userId})
    if(!user){
        throw Error("usuario no encontrado");
    }
    const appointmentsUserId: Appointment[] = await appointmentRepository.find({where: {userId: user.id}});
    user.appointment = appointmentsUserId;
    return user;
    
    //return users.find(user => user.id === userId);
}

export const createUserWithCredentialsService = async (userData: IUserDto): Promise<User> => {
    const credentialData: ICredentialDto = {
        username: userData.username,
        password: userData.password
    };

    const newCredential = await createCredentialService(credentialData);

    const newUser: User = usersRepository.create({
        name: userData.name,
        email: userData.email,
        birthdate: userData.birthdate,
        nDni: userData.nDni,
        credentials: newCredential
    });

    await usersRepository.save(newUser);
    return newUser;
};


export const loginService = async (validateCredential: ICredentialDto) => {
    const credential = await validateCredentialService({ username: validateCredential.username, password: validateCredential.password });
    const user = await usersRepository.findOneBy({credentials: credential});
    console.log(user);
    console.log(credential);
    return user;
}

