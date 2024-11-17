import { Injectable } from '@nestjs/common';
import User from 'models/users';

@Injectable()
export class UsersService {
  async create(UserData: User): Promise<string> {
    User.create(UserData);
    return 'User created';
  }
  async login(UserData: Partial<User>): Promise<string> {
    const isUser = await User.findOne({ where: { email: UserData.email } });
    if (!isUser) {
      return 'User not found';
    }
    if (isUser.password === UserData.password) {
      return 'Login successful';
    } else {
      return 'Password incorrect';
    }
  }
  async findAll(): Promise<User[]> {
    return User.findAll();
  }
}
