const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,
    index: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
},
    {timestamps: true}
)

module.exports = mongoose.model('User', UserSchema)