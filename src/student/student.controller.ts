import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { StudentsService } from './students.services';
import Student from 'models/students';

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Post()
  async create(@Body() studentData: Student): Promise<Student> {
    return this.studentsService.create(studentData);
  }

  @Get()
  async findAll(): Promise<Student[]> {
    return this.studentsService.findAll();
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() studentData: Partial<Student>,
  ): Promise<string> {
    return this.studentsService.update(id, studentData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<string> {
    return this.studentsService.delete(id);
  }
}
