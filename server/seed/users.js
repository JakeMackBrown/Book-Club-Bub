const mongoose = require('mongoose')
const { connectDB } = require('../db')
const User = require('../models/user')

const main = async () => {
  const users = [
    { name: 'Alice', email: 'alice@example.com', password: 'password123' },
    { name: 'Bob', email: 'bob@example.com', password: 'password456' }
  ]

  await User.deleteMany({})
  await User.insertMany(users)

  console.log('Users seeded!')
}

const run = async () => {
  await connectDB()
  await main()
  mongoose.connection.close()
}

run()