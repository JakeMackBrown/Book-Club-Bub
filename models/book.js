const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  }
},
    {timestamps: true}
)

module.exports = bookSchema