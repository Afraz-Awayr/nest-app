import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { StudentsModule } from './student/students.module';
import { UsersModule } from './users/users.module';
import { PassportModule } from '@nestjs/passport';
import { PassportServices } from './Passport/passport.sevices';
import { BearerStrategy } from './Passport/bearer.strategy';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'wiredb',
      autoLoadModels: true,
      synchronize: true,
    }),
    StudentsModule,
    UsersModule,
    PassportModule,
  ],
  controllers: [AppController],
  providers: [AppService, BearerStrategy, PassportServices],
})
export class AppModule {}
