import { ICredentialDto } from "../dtos/ICredentialDto";
import { Credential } from "../entities/Credential";
import { AppDataSource, credentialRepository } from "../config/data-Source";


export const createCredentialService = async (createCredentialData: ICredentialDto): Promise<Credential> => {
    const newCredential: Credential = credentialRepository.create({
        username: createCredentialData.username,
        password: createCredentialData.password
    });
    
    
    await credentialRepository.save(newCredential)
    
    return newCredential;
}


export const validateCredentialService = async (validateCredentialData: ICredentialDto): Promise<Credential> => {
    const { username, password } = validateCredentialData;
    const foundCredential = await credentialRepository.findOneBy({username: username})
    //[{ id:2, username:"Homero", password:"1234" }];
    if(!foundCredential) throw Error("Usuario no encontrado");
    if(password !== foundCredential?.password) throw Error("Contraseña incorrecta");
    return foundCredential;
} 





