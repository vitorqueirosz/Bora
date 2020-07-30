import { EntityRepository, Repository } from 'typeorm';
import Trip from '../models/Trips';

// interface Request {
//     date: string;
//     uf: string;
//     city: string;
// }

@EntityRepository(Trip)
class TripsRepository extends Repository<Trip> {
  public async findBydate(date: string): Promise<Trip | null> {
    const findTrip = await this.findOne({
      where:
        { date },
    });

    return findTrip || null;
  }
}

export default TripsRepository;
