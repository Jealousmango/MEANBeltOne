var path = require('path');
var users = require(path.join(__dirname, '..', 'controllers', 'users.js'))
var questions = require(path.join(__dirname, '..', 'controllers', 'questions.js'))
var answers = require(path.join(__dirname, '..', 'controllers', 'answers.js'))


module.exports = function(app) {
    app.get('/users/session', users.session);
    app.get('/users', users.index);
    app.post('/users', users.login);

    app.get('/questions', questions.index);
    app.post('/questions', questions.create);
    app.get('/questions/:_id', questions.find);

    app.get('/answers', answers.index);
    app.post('/answers', answers.create);
    app.get('/answers/:_id/upvote', answers.upvote);
    // app.get('/show', questions.find(question_id))
    // app.get('/show', questions.index)
}
