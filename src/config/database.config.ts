import 'dotenv/config';
import { NotificationToken } from "src/notification/entities/notification-token.entity";
import { Notifications } from "src/notification/entities/notification.entity";
import { User } from "src/users/entities/user.entity";
import { DataSourceOptions } from "typeorm";

const databaseConfig: DataSourceOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "in_app_notification",
  entities: [
    Notifications, NotificationToken, User
  ],
  synchronize: true,
}

export default databaseConfig;
