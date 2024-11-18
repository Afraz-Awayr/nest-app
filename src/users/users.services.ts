import { Injectable } from '@nestjs/common';
import User from 'models/users';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UsersService {
  async create(UserData: User): Promise<string> {
    
    const user = await User.create(UserData);
    return `User created ${user}`;
  }
  async login(UserData: Partial<User>): Promise<string> {
    const isUser = await User.findOne({ where: { email: UserData.email } });
    if (!isUser) {
      return 'User not found';
    }
    if (isUser.password === UserData.password) {
      const accessKey = uuid();
      const accessKeyExpiration = new Date(Date.now() + 3000000);

      try {
        await isUser.update({
          access_key: accessKey,
          expiry_time: accessKeyExpiration,
        });
      } catch (error) {
        console.error('Error updating user:', error);
      }

      return `Login was successfull 
      Access Key: ${accessKey}`;
    } else {
      return 'Password incorrect';
    }
  }
  async findAll(): Promise<User[]> {
    return User.findAll();
  }
}
