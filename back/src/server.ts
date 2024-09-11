import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { indexRouter } from './routes/indexRoutes';

const server = express();

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

server.use(indexRouter);


export { server };