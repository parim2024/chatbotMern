/*
import mongoose from 'mongoose';

const anonymousSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    article: {
        type: String,
        required: true
    },
    options: {
        type: String,
        enum: ['happy', 'sad', 'depression', 'adhd', 'other'],
    },
    tags: [
        {
            type: String
        }
    ]
},
{ timestamps: true });

const Anonymous = mongoose.model('Anonymous', anonymousSchema);
export default Anonymous;
 */

import mongoose from 'mongoose';

const anonymousSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  article: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['happy', 'sad', 'depression', 'adhd', 'other'],
  },
  tags: [String],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  comments: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    text: String,
    createdAt: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

const Anonymous = mongoose.model('Anonymous', anonymousSchema);
export default Anonymous;
