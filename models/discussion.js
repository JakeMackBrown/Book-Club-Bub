const mongoose = require('mongoose');
const { Schema } = mongoose;

const discussionSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  meeting_id: {
    type: Schema.Types.ObjectId,
    ref: 'Meeting',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
},
    { timestamps: true}
)

module.exports = discussionSchema