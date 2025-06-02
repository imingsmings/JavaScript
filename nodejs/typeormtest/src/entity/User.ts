import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm'
import { IdCard } from './IdCard'

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

  @OneToOne(() => IdCard, (card) => card.user)
  @JoinColumn()
  card: IdCard
}
