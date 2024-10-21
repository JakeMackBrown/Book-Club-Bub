const mongoose = require('mongoose')
const db = require('../db')
const { User } = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

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
  await main()
  db.close()
}

run()