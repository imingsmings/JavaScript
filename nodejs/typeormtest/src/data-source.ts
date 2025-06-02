import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from './entity/User'
import { IdCard } from './entity/IdCard'

export const AppDataSource = new DataSource({
  type: 'mysql',
  synchronize: true,
  logging: false,
  entities: [User, IdCard],
  migrations: [],
  subscribers: [],
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'nodejs'
})
