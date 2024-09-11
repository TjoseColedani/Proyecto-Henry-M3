import { Router } from "express";
import { userRouter } from "./usersRoutes";
import { appointmentsRouter } from "./appointmentsRoutes";

const indexRouter: Router = Router();

indexRouter.use("/users" , userRouter);
indexRouter.use("/appointments", appointmentsRouter);


export { indexRouter };