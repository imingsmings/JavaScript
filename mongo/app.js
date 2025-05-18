import mongoose from 'mongoose'

async function main() {
  mongoose.connect(process.env.MONGODB_REMOTE, {
    dbName: 'test'
  })

  const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    isActive: Boolean,
    tags: [String],
    createdAt: { type: Date, default: Date.now }
  })

  const UserModel = mongoose.model('User', userSchema)

  try {
    // const newUser = await UserModel.create({
    //   name: 'momo',
    //   email: 'abcd!123.com',
    //   age: 12,
    //   isActive: true,
    //   tags: ['devs', 'runner']
    // })
    // console.log('New User:', newUser)

    const allUsers = await UserModel.find({})
    console.log(allUsers)
  } catch (e) {
    console.error(e)
  } finally {
    mongoose.connection.close()
  }
}

main()
