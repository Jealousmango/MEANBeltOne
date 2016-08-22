var mongoose = require('mongoose');
var questionSchema = new mongoose.Schema({
  title : String,
  description : String,
  category : String,
  _answers : [{ type : mongoose.Schema.Types.ObjectId, ref: 'answers' }],
  _user : { type : mongoose.Schema.Types.ObjectId, ref: 'users', required : true }
}, { timestamps: true });

mongoose.model('questions', questionSchema);
