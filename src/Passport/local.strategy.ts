import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import User from 'models/users';

@Injectable
export class Local extends PassportStrategy(Strategy) {
  async KeyValidator(key: any) {
    const isKey = await User.findOne({ where: { access_key: key } });
    if (!isKey) {
      return false;
    }
    return;
  }
}
