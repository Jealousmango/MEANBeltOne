var mongoose = require('mongoose');
var Question = mongoose.model('questions');
var User = mongoose.model('users');

module.exports = {
  index : function(req, res) {
    Question.find(function(err, questions) {
      if (err) return res.send(err);

      res.send(questions);
    });
  },
  find : function(req, res) {
    Question
      .findOne({ _id : req.params._id })
      .populate('_answers _user')
      .exec(function(err, question) {
        if (err) return res.send(err);

        res.send(question);
    });
  },
  create : function(req, res) {
    Question.create({
      title : req.body.title,
      description : req.body.description,
      category : req.body.category,
      _user : req.session.userId
    }, function(err, question) {
      if (err) return res.send(err);

      User.update({ _id : req.session.userId }, { $push : { _questions : question._id } }, function(err, updated) {
          res.send(question);
      });
    });
  }
};
