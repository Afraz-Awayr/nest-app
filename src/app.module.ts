import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsController } from './student/student.controller';
import { StudentsService } from './student/students.services';
import { SequelizeModule } from '@nestjs/sequelize';
import { StudentsModule } from './student/students.module';



@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'wiredb ',
      autoLoadModels: true,
      synchronize: true,
    }),
    StudentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
