import { Injectable } from '@nestjs/common';
import User from 'models/users';

@Injectable()
export class PassportServices {
  async validateAccessKey(key: string): Promise<any> {
    const isKey = await User.findOne({ where: { access_key: key } });
    if (isKey) {
      const current_time = new Date().getTime();
      const expire_time = new Date(isKey.expiry_time).getTime();

      if (current_time > expire_time) {
        return 'access key expired';
      }

      return isKey;
    } else {
      return 'invalid access key';
    }
  }
}
