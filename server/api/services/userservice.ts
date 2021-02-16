// src/users/usersService.ts
import { User } from '../../common/model';
import { getRepository } from 'typeorm';

// A post request should not contain an id.
export type UserCreationParams = Pick<User, 'email' | 'name' | 'phoneNumbers'>;

export class UsersService {
  private userRepository = getRepository(User);

  public async get(id: number): User {
    return this.userRepository.findOne(id);
  }

  public create(userCreationParams: UserCreationParams): User {
    return {
      id: Math.floor(Math.random() * 10000), // Random
      status: 'Happy',
      ...userCreationParams,
    };
  }
}
