import { Request, Response } from "express";
import { User } from "../entities/User";
import { getAllUsersService , getUserByIdService, loginService } from "../services/usersService";
import { createUserWithCredentialsService } from "../services/usersService";
import { validateCredentialService } from  "../services/credentialsService"
import { AppDataSource } from "../config/data-Source";




export const getAllUsers = async (req: Request,res: Response) => {
    try {
        const users: User[] = await getAllUsersService();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(404).json({error: error.message})
    }
}

export const getUserById = async (req: Request,res: Response) => {
    const { id } = req.params; 
    try {
        const user = await getUserByIdService(Number(id));
        res.status(200).json(user);
    } catch (error: any) {
        res.status(404).json({error: error.message})
    }
}

export const register = async (req: Request,res: Response) => {
    const { name, email, birthdate, nDni, username, password } = req.body;
    try {
        const newUser: User = await createUserWithCredentialsService(
        { name, email, birthdate, nDni, username, password });
        res.status(200).json(newUser);
    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
    
}

export const login = async (req: Request,res: Response) => {
    const { username, password } = req.body;
    try {
        const user = await loginService({username,password});
        res.status(200).json({login:true,user});
    } catch (error) {
        res.status(400).json({error: "Error: login invalido"});
    }
}



