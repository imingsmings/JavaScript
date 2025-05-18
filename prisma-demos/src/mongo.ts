import { PrismaClient } from '@prisma/client'
import { log } from 'console'

const prisma = new PrismaClient()

function main() {
  finfAll()
}

async function finfAll() {
  // const user = await primsa.user.create({
  //   data: {
  //     name: 'Jason Wang',
  //     email: 'jason@example.com',
  //     age: 30,
  //     isActive: true,
  //     tags: ['developer', 'mongodb']
  //   }
  // })
  // log(user)
  const res = await prisma.user.findMany({})
  console.log(res)
}

main()
