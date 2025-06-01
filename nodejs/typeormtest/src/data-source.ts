import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from './entity/User'

export const AppDataSource = new DataSource({
  type: 'mysql',
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'nodejs'
})
