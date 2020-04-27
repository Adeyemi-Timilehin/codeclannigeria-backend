import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReturnModelType } from '@typegoose/typegoose';

import { BaseService } from '../shared/services/base.service';
import { User } from './models/user.entity';

@Injectable()
export class UsersService extends BaseService<User> {
  constructor(
    @InjectModel(User.modelName)
    private readonly userEntity: ReturnModelType<typeof User>,
  ) {
    super(userEntity);
  }
}
