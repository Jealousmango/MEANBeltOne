var mongoose = require('mongoose');
var Answer = mongoose.model('answers');
var User = mongoose.model('users');
var Question = mongoose.model('answers');

module.exports = {
  index : function(req, res) {
    Answer.find(function(err, answers) {
      if (err) return res.send(err);

      res.send(answers);
    });
  },
  upvote : function(req, res) {
    Answer.update({ _id : req.params._id }, { $inc : { upvotes : 1 } }, function(err, updated) {
      if (err) return res.send(err);

      res.send({success : true});
    });
  },
  create : function(req, res) {
    Answer.create({
      message : req.body.message,
      _question : req.body.questionId,
      _user : req.session.userId
    }, function(err, answer) {
      if (err) return res.send(err);

      User.update({ _id : req.session.userId }, { $push : { _answers : answer._id } },function(err, updatedUser) {
        Question.update({ _id : req.body.questionId }, { $push : { _answers : answer._id } },function(err, updatedQuestion) {
          res.send(answer);
        });
      });
    });
  }
};
