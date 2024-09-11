import { Router } from "express";
import { getAllAppointments, getAppointmentById, schedule, cancel } from "../controllers/appointmentController";


const appointmentsRouter: Router = Router();


appointmentsRouter.get('/', getAllAppointments)

appointmentsRouter.get('/:appId', getAppointmentById)

appointmentsRouter.post('/schedule', schedule)

appointmentsRouter.put('/cancel/:appId', cancel)

export { appointmentsRouter };