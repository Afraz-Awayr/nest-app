import { Body, Controller, Get, Post } from '@nestjs/common';
import User from 'models/users';
import { UsersService } from './users.services';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post()
  async create(@Body() userData: User): Promise<string> {
    return this.usersService.create(userData);
  }
  @Post('login')
  async login(@Body() userData: Partial<User>): Promise<string> {
    return this.usersService.login(userData);
  }
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
