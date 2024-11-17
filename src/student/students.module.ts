import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import Student from 'models/students';
import { StudentsController } from './student.controller';
import { StudentsService } from './students.services';

@Module({
  imports: [SequelizeModule.forFeature([Student])],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
