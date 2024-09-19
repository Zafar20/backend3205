import { Controller, Get, Query } from '@nestjs/common';
import { IUser, UsersService } from './users.service';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findUser(@Query('email') email: string, @Query('number') number?: string): Promise<IUser[]> {
   return this.usersService.findUser(email, number)
  }
}
