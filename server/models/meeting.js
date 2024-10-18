const mongoose = require('mongoose');
const { Schema } = mongoose;

const MeetingSchema = new Schema({
  meeting_id: {
    type: Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,
    index: true
  },
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

module.exports = mongoose.model('Meeting', MeetingSchema)
