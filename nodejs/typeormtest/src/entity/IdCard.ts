import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm'
import { User } from './User'

@Entity()
export class IdCard {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 10, type: 'char' })
  cardNo: string

  @Column({
    type: 'varchar'
  })
  name: string

  @Column({
    type: 'varchar'
  })
  address: string

  @Column({
    type: 'date'
  })
  birthday: Date

  @Column({
    type: 'varchar'
  })
  email: string

  @OneToOne(() => User, (user) => user.card)
  @JoinColumn()
  user: User
}
