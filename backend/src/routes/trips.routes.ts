import { Router } from 'express';

import { getCustomRepository, getRepository } from 'typeorm';
import { parseISO, format } from 'date-fns';
import TripsRepository from '../repositories/TripsRepository';
import ensureceAuthenticated from '../middlewares/ensureAuthenticated';
import CreateTripService from '../services/CreateTripService';
import Trip from '../models/Trips';

const { enUS, pt } = require('date-fns/locale');

const tripsRouter = Router();

tripsRouter.use(ensureceAuthenticated);

tripsRouter.get('/filterTrips', async (request, response) => {
  const tripsRepository = getCustomRepository(TripsRepository);
  const user_id = request.user.id;

  const trips = await tripsRepository.find({ where: { user_id } });

  if (trips) {
    const trip = trips.map((formattedTrip) => ({
      ...formattedTrip,
      date: format(formattedTrip.date, 'dd-MM-yyyy', { locale: pt }),
    }));

    return response.json({ trip });
  }
});

tripsRouter.get('/', async (request, response) => {
  const tripsRepository = getRepository(Trip);

  const { date, uf, city } = request.query;

  const formattedIso = String(date).split('-').reverse().join('-');

  const formattedDateToIso = parseISO(formattedIso);

  const formattedDate = format(
    formattedDateToIso, 'yyyy-MM-dd', { locale: enUS },
  );

  const trips = await tripsRepository.find({
    where: [
      { date: formattedDate, uf, city },
    ],
  });

  return response.json({ trips });
});

tripsRouter.get('/:id', async (request, response) => {
  const tripsRepository = getRepository(Trip);

  const { id } = request.params;
  const user_id = id;

  const
    trips = await tripsRepository.find({ where: { user_id } });

  return response.json({ trips });
});

tripsRouter.post('/', async (request, res) => {
  const {
    trip_type,
    vehicle,
    uf,
    city,
    date,
  } = request.body;

  const user_id = request.user.id;

  const createTrip = new CreateTripService();

  const trip = await createTrip.execute({
    user_id,
    trip_type,
    vehicle,
    uf,
    city,
    date,

  });

  return res.json(trip);
});

export default tripsRouter;
