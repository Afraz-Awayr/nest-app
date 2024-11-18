import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-http-bearer';
import { PassportServices } from './passport.sevices';

@Injectable()
export class BearerStrategy extends PassportStrategy(Strategy, 'bearer') {
  constructor(private readonly passportServices: PassportServices) {
    super();
  }

  async validate(token: string): Promise<any> {
    console.log(`BearerStrategy.validate() - token: ${token}`);

    const user = await this.passportServices.validateAccessKey(token);
    if (!user) {
      console.error('BearerStrategy.validate() - Invalid token');
      throw new UnauthorizedException('Invalid token');
    }
    console.log('BearerStrategy.validate() - Valid token, user:', user);
    return user;
  }
}
