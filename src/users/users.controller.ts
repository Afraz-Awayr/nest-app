import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import User from 'models/users';
import { UsersService } from './users.services';
import { AuthGuard } from '@nestjs/passport';

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
  @UseGuards(AuthGuard('bearer'))
  @Get()
  // async findAll(@Request() userRequest: Request): Promise<User[]> {
  //   console.log(userRequest);
  async findAll(): Promise<User[]> {
    console.log('UsersController.findAll() - Authenticated request');
    return this.usersService.findAll();
  }
}
