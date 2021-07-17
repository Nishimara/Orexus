import { createConnection, Repository } from 'typeorm';
import { User } from './User.entity';

export let userRepository: Repository<User>;
createConnection().then((res) => (userRepository = res.getRepository(User)));
