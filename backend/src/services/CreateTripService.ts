import { getCustomRepository } from 'typeorm';
import { id } from 'date-fns/locale';
import TripsRepository from '../repositories/TripsRepository';
import Trip from '../models/Trips';

import AppError from '../errors/AppError';

interface Request {
    user_id: string;
    trip_type: string;
    vehicle: string;
    uf: string;
    city: string;
    date: string;
}

class CreateTripService {
  public async execute({
    user_id, trip_type, vehicle, uf, city, date,
  }: Request): Promise<Trip> {
    const tripsRepository = getCustomRepository(TripsRepository);

    const findTripInSameDate = await tripsRepository.findBydate(
      date,
    );

    if (findTripInSameDate) {
      const checkUser = await tripsRepository.findOne({ where: { user_id } });
      if (checkUser) {
        throw new AppError('This Trip is already booked.');
      }
    }

    const trip = tripsRepository.create({
      user_id,
      trip_type,
      vehicle,
      uf,
      city,
      date,
    });

    await tripsRepository.save(trip);

    return trip;
  }
}

export default CreateTripService;
