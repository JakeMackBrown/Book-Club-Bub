const mongoose = require('mongoose')
const db = require('../db')
const Meeting = require('../models/meeting')
const Book = require('../models/book')

const main = async () => {
  const book1984 = await Book.findOne({ title: '1984' })

  const meetings = [
    { date: new Date(), location: 'Library', book_id: book1984._id }
  ]

  await Meeting.deleteMany({})
  await Meeting.insertMany(meetings)

  console.log('Meetings seeded!')
}

const run = async () => {
  await main()
  db.close()
}

run()