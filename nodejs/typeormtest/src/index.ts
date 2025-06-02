import { AppDataSource } from './data-source'
import { IdCard } from './entity/IdCard'
import { User } from './entity/User'

async function main() {
  // await AppDataSource.initialize()
  // const user = new User()
  // user.name = 'wxm'
  // user.age = 30
  // user.phone = '18888888888'
  // user.desc = 'desc111'
  // user.other = 3.14
  // const result = await AppDataSource.manager.save(user)
  // console.log(result)
  // const result = await AppDataSource.manager.find(User)
  // const result = await AppDataSource.manager.find(User, {
  //   where: {
  //     id: 1
  //   }
  // })
  // console.log(result)
  // const userRepo = AppDataSource.getRepository(User)
  // const result = await userRepo.update(
  //   { id: 1 },
  //   {
  //     age: 22
  //   }
  // )
  // const user = new User()
  // user.name = 'wxm1'
  // user.age = 30
  // user.phone = '18888888887'
  // user.desc = '11desc111'
  // user.other = 3.1411
  // const result = await userRepo.insert(user)
  // const result = await userRepo.findBy({ id: 2 })
  // const result = await userRepo.delete({ id: 1 })
  // console.log(result)
  // const user = await userRepo.createQueryBuilder('user').where('user.id=:id', { id: 2 }).getRawOne()
  // console.log(user)
  // process.exit(0)

  await AppDataSource.initialize()

  // const user = new User()
  // user.name = 'wxm'
  // user.age = 30
  // user.phone = '18888888888'
  // user.desc = 'desc111'
  // user.other = 3.14
  // await AppDataSource.manager.save(user)

  // const card = new IdCard()
  // card.address = 'Chang Road No.5'
  // card.birthday = new Date('1996-09-09')
  // card.cardNo = '1234567890'
  // card.email = 'nb@qq.com'
  // card.name = 'card_name_1'
  // card.user = user

  // await AppDataSource.manager.save(card)

  // const cardRepo = AppDataSource.getRepository(IdCard)
  // const cards = await cardRepo.find({
  //   relations: {
  //     user: true
  //   }
  // })
  // console.log(cards)

  const userRepo = AppDataSource.getRepository(User)
  const users = await userRepo.find({
    relations: {
      card: true
    }
  })
  console.log(users)

  process.exit(0)
}

main()
