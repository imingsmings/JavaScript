import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 100,
    type: 'varchar'
  })
  name: string

  @Column({
    type: 'tinyint'
  })
  age: number

  @Column({ type: 'char', length: 11 })
  phone: string

  @Column({
    type: 'text'
  })
  desc: string

  @Column({
    type: 'double',
    default: 0
  })
  other: number
}
