var mongoose = require('mongoose');
var answerSchema = new mongoose.Schema({
  message : String,
  upvotes : { type : Number, default : 0 },
  _user : { type : mongoose.Schema.Types.ObjectId, ref: 'users' },
  _question : { type : mongoose.Schema.Types.ObjectId, ref: 'questions' }
}, { timestamps: true });

mongoose.model('answers', answerSchema);
