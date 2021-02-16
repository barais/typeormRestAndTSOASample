// src/users/usersService.ts
import { User } from '../../common/model';
import { getRepository } from 'typeorm';

// A post request should not contain an id.
export type UserCreationParams = Pick<User, 'email' | 'name' | 'phoneNumbers'>;

export class UsersService {
  private userRepository = getRepository(User);

  public async get(id: number) {
    return this.userRepository.findOne(id);
  }

  public create(userCreationParams: UserCreationParams) {
    const l = new User();
    l.email = userCreationParams.email;
    l.name = userCreationParams.name;
    l.phoneNumbers = userCreationParams.phoneNumbers;
    return this.userRepository.save(l);
  }
}
