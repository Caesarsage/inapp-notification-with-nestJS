import { Notification } from "src/notification/entities/notification.entity";
import { DataSourceOptions } from "typeorm";

const databaseConfig: DataSourceOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "password",
  database: "test",
  entities: [
    Notification
  ],
  synchronize: true,
}

export default databaseConfig;
