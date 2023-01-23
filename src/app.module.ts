import 'dotenv/config';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { NotificationToken } from './notification/entities/notification-token.entity';
import { Notifications } from './notification/entities/notification.entity';
// import { typeOrmAsyncConfig } from './config/typeorm.config';
import { NotificationModule } from './notification/notification.module';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: "in_app_notification",
      entities: [Notifications, NotificationToken, User],
      synchronize: true,
  }),
    NotificationModule,
    UsersModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
