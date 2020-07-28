import { Router } from 'express';
import multer from 'multer';
import { getRepository, getCustomRepository } from 'typeorm';
import { format } from 'date-fns';
import TripsRepository from '../repositories/TripsRepository';
import uploadConfig from '../config/upload';
import CreateUserService from '../services/CreateUserService';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';
import User from '../models/User';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const { pt } = require('date-fns/locale');

interface TripData {
    user_id?: string;
    trip_type?: string;
    vehicle?: string;
    uf?: string;
    city?: string;
    date?: string;

}

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.get('/', ensureAuthenticated, async (request, response) => {
  const userRepository = getRepository(User);
  const tripsRepository = getCustomRepository(TripsRepository);

  const { id } = request.user;

  const user = await userRepository.findOne({ where: { id } });
  const trips = await tripsRepository.find({ where: { user_id: id } });

  delete user?.password;

  if (trips) {
    const trip = trips.map((formattedTrip) => ({
      ...formattedTrip,
      date: format(formattedTrip.date, 'dd-MM-yyyy', { locale: pt }),
    }));

    return response.json({ user, trip });
  }

  return response.json({ user });
});

usersRouter.post('/', async (request, response) => {
  const {
    name, email, password, whatsapp, uf, city,
  } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    email,
    password,
    whatsapp,
    uf,
    city,
  });

  delete user.password;

  return response.json(user);
});

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    const updateUserAvatar = new UpdateUserAvatarService();

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  },
);

export default usersRouter;
