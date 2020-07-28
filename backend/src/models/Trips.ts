import {
  Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne,
} from 'typeorm';

import User from './User';

@Entity('trips')
class Trip {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column()
    trip_type: string;

    @Column()
    vehicle: string;

    @Column()
    uf: string;

    @Column()
    city: string;

    @Column('time with time zone')
    date: Date;
}

export default Trip;
