const mongoose = require('mongoose');
const { Schema } = mongoose;

const meetingSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  book_id: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  }
},
    { timestamps: true}
)

module.exports = meetingSchema