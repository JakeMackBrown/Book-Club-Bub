const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
  book_id: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    index: true
  },
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

module.exports = mongoose.model('Book', BookSchema)
