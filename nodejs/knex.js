import mysql2 from 'mysql2'
import knex from 'knex'

const db = knex({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'db_test'
  }
})

async function main() {
  const exist = await db.schema.hasTable('users')
  if (!exist) {
    await db.schema.createTable('users', (table) => {
      table.increments('id')
      table.integer('age')
      table.string('name')
      table.string('hobby')
      table.timestamps(true, true)
    })
  }

  // await db('users').insert({
  //   name: 'name1',
  //   age: 23,
  //   hobby: 'running'
  // })

  // await db('users')
  //   .update({
  //     name: 'name2'
  //   })
  //   .where({ id: 3 })

  // await db('users').delete({
  //   id: 2
  // })

  // const res = await db('users')
  // console.log(res)

  // await db('users').delete().where({ id: 3 })

  // console.log(db('users').select().toSQL().sql)
  // await db.raw(`insert into users (name,age,hobby) values('w1',24,'coding')`)

  const res = await db('employees').select().leftJoin('departments', 'employees.did', 'departments.dpt_id')
  console.log(res)
}

main()
