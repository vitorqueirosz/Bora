import {
  Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,
  OneToMany, JoinColumn,
} from 'typeorm';

import Trips from './Trips';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    avatar: string;

    @Column()
    whatsapp: number;

    @Column()
    uf: string;

    @Column()
    city: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => Trips, (trip) => trip.user_id)
    @JoinColumn({ name: 'id' })
    trip: Trips[];
}

export default User;
