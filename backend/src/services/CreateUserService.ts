import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/User';

import AppError from '../errors/AppError';

interface Request {
    name: string;
    email: string;
    password: string;
    whatsapp: number;
    uf: string;
    city: string;
}

class CreateUserService {
  public async execute({
    name, email, password, whatsapp, uf, city,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({ where: { email } });

    if (checkUserExists) {
      throw new AppError('Email adress already used.');
    }

    const hashPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashPassword,
      whatsapp,
      uf,
      city,
    });

    await usersRepository.save(user);
    return user;
  }
}

export default CreateUserService;
