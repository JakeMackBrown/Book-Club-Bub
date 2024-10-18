const mongoose = require('mongoose');
const { Schema } = mongoose;

const DiscussionSchema = new Schema({
  discussion_id: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
    index: true
  },
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

module.exports = mongoose.model('Discussion', DiscussionSchema)
