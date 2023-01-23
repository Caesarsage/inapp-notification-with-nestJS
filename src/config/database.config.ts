import { NotificationToken } from "src/notification/entities/notification-token.entity";
import { Notifications } from "src/notification/entities/notification.entity";
import { User } from "src/users/entities/user.entity";
import { DataSourceOptions } from "typeorm";

const databaseConfig: DataSourceOptions = {
  type: "mysql",
  host: "",
  port: 3306,
  username: "",
  password: "",
  database: "in_app_notification",
  entities: [
    Notifications, NotificationToken, User
  ],
  synchronize: true,
}

export default databaseConfig;
