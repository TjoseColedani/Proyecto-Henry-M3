import { AppointmentStatus, IAppointment } from "../interfaces/IAppointment";
import { Appointment } from "../entities/Appointment";
import { appointmentRepository } from "../config/data-Source";
import { IAppointmentDto } from "../dtos/IAppointmentDto";




export const getAllAppointmentsService = async () => {
    const allAppointments: Appointment[] = await appointmentRepository.find();
    return allAppointments;
}


export const getAppointmentByIdService = async (appointmentId: number): Promise<Appointment | null> => {
    const appointment = await appointmentRepository.findOneBy({id:appointmentId});
    if(!appointment){
        throw Error("Turno no encontrado");
    }
    return appointment;
}


export const createAppointmentService = async (appointmentData: IAppointmentDto): Promise<Appointment> => {
    if(!appointmentData) throw Error("No se encontro el id del usuario");

    
    const newAppointment: Appointment = new Appointment();
    newAppointment.date = appointmentData.date,
    newAppointment.time = appointmentData.time,
    newAppointment.userId = appointmentData.userId,
    newAppointment.status = 'active',
    newAppointment.description = appointmentData.description
    
    
    await appointmentRepository.save(newAppointment)
    return newAppointment;
} 


export const cancelAppointmentService = async (appointmentId: number): Promise<Appointment | undefined> => {
    const appointmentById = await appointmentRepository.findOneBy({id:appointmentId});

    if(!appointmentById) throw Error("Turno no encontrado");

    appointmentById.status = 'cancelled';
    await appointmentRepository.save(appointmentById)
    return appointmentById;
}  