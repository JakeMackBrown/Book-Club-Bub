const mongoose = require('mongoose')
const { connectDB } = require('../../db')
const Discussion = require('../models/discussion')
const User = require('../models/user')
const Meeting = require('../models/meeting')

const main = async () => {
  const userAlice = await User.findOne({ email: 'alice@example.com' })
  const meeting = await Meeting.findOne()

  const discussions = [
    { user_id: userAlice._id, meeting_id: meeting._id, content: 'Great discussion on 1984!' }
  ];

  await Discussion.deleteMany({})
  await Discussion.insertMany(discussions)

  console.log('Discussions seeded!')
}

const run = async () => {
  await connectDB()
  await main()
  mongoose.connection.close()
}

run()