import { Router } from 'express';
import tripsRouter from './trips.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/users', usersRouter);

routes.use('/trips', tripsRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
