import { Request, Response } from "express";
import { Appointment } from "../entities/Appointment";
import { AppointmentStatus } from "../interfaces/IAppointment";
import { getAllAppointmentsService, getAppointmentByIdService, createAppointmentService, cancelAppointmentService } from "../services/appointmentsService";


export const getAllAppointments = async (req: Request, res: Response) => {
    try {
        const appointments: Appointment[] = await getAllAppointmentsService();
        res.status(200).json(appointments);
    } catch (error: any) {
        res.status(404).json({error: error.message})
    }
}

export const getAppointmentById = async (req: Request, res: Response) => {
    try {
        const appId = parseInt(req.params.appId);
        const appointment = await getAppointmentByIdService(appId);
        if(!appointment){
            res.status(400).json({error: "No se encontro el Turno"})
        } else {
            res.status(200).json(appointment);
        }
    } catch (error) {
        res.status(500).json({error: "Error interno"});
    }
}


export const schedule = async (req: Request, res: Response) => {
    try {
        const { date, time, userId, status, description} = req.body;
        const newAppointment: Appointment = await createAppointmentService(
        { date, time, userId, status, description });
        res.status(201).json(newAppointment);
    } catch (error: any) {
        res.status(400).json({error: error.message})
    }
}

export const cancel = async (req: Request, res: Response) => {
    const { appId } = req.params;
    try {
        await cancelAppointmentService(Number(appId));
        res.status(200).json("Turno cancelado");
    } catch (error: any) {
        res.status(404).json({error: error.message});
    }
} 