import { Module } from '@nestjs/common';
import { UserController } from './contoller/user/user.controller';

@Module({
  controllers: [UserController]
})
export class UsersModule {}
