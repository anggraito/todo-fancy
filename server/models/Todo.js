const mongoose = require('mongoose')
var Schema = mongoose.Schema

var todoSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId, 
    ref: 'User'    
  },
  list: {
    type: String,
    required: [true, 'Task tidak boleh kosong']
  },
  dueDate: {
    type: Date
  },
  status: {
    type: Boolean
  },
  tags: [{
    type: String
  }],
}, {
  timestamps: true
})