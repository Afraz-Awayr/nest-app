import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { PassportServices } from './passport.sevices';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private passportServices: PassportServices) {
    super({
      usernameField: 'access_key',
    });
  }

  async validate(accessKey: string): Promise<any> {
    const user = await this.passportServices.validateAccessKey(accessKey);
    if (!user) {
      throw new UnauthorizedException('Invalid access key');
    }
    return user;
  }
}
