import { Router } from 'express';

import { getCustomRepository, getRepository } from 'typeorm';
import { parseISO, format } from 'date-fns';
import TripsRepository from '../repositories/TripsRepository';
import ensureceAuthenticated from '../middlewares/ensureAuthenticated';
import CreateTripService from '../services/CreateTripService';
import Trip from '../models/Trips';
import User from '../models/User';

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

  return response.json();
});

tripsRouter.get('/', async (request, response) => {
  const tripsRepository = getRepository(Trip);

  const { date, uf, city } = request.query;

  const formattedIso = String(date).split('-').reverse().join('-');

  const formattedDateToIso = parseISO(formattedIso);

  const formattedDate = format(
    formattedDateToIso, 'yyyy-MM-dd', { locale: enUS },
  );

  const getTrips = await tripsRepository.find({
    where: [
      { date: formattedDate, uf, city },
    ],
  });

  const trips = getTrips.map((trip) => ({
    ...trip,
    date,
  }));

  return response.json({ trips });
});

tripsRouter.get('/:id', async (request, response) => {
  const tripsRepository = getRepository(Trip);
  const userRepository = getRepository(User);

  const { id } = request.params;

  const getTrip = await tripsRepository.findOne({ where: { id } });
  const user_id = getTrip?.user_id;

  const tripData = [getTrip].map((t) => ({
    ...t,
    date: format(Number(t?.date), 'dd-MM-yyyy', { locale: pt }),
  }));

  const user = await userRepository.findOne({ where: { id: user_id } });

  const [tripsData] = tripData;

  return response.json({ user, trip: tripsData });
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
