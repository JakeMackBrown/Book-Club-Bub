const mongoose = require('mongoose')
const { connectDB } = require('../../db')
const Book = require('../models/book')

const main = async () => {
  const books = [
    { title: '1984', author: 'George Orwell', genre: 'Dystopian' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' }
  ]

  await Book.deleteMany({})
  await Book.insertMany(books)

  console.log('Books seeded!')
}

const run = async () => {
  await connectDB()
  await main()
  mongoose.connection.close()
}

run()