import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode, Put } from '@nestjs/common';
import { NotificationDto } from 'src/notification/dto/create-notification.dto';
import { UpdateNotificationDto } from 'src/notification/dto/update-notification.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Put()
  @HttpCode(HttpStatus.OK)
  async updateProfile(
    @Body() update_dto: any,
    @Param('id') user_id: number,
  ) {
    return await this.usersService.updateProfile(user_id ,update_dto);
  }

  @Put('push/enable')
  @HttpCode(HttpStatus.OK)
  async enablePush(
    @Body() update_dto: NotificationDto,
    @Param('id') user_id: number,
  ) {
    return await this.usersService.enablePush(user_id, update_dto)  
  }

  @Put('push/disable')
  @HttpCode(HttpStatus.OK)
  async disablePush(
    @Param('id') user_id: number,
    @Body() update_dto: UpdateNotificationDto,
  ) {
    return await this.usersService.disablePush(user_id, update_dto)
  }

  @Get('push/notifications')
  @HttpCode(HttpStatus.OK)
  async fetchPusNotifications() {
    return await this.usersService.getPushNotifications();
  }
}
