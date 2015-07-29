var express = require('express');
var router = express.Router();

// Controlador
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

// Autoload de comandos con :quizId
router.param('quizId', quizController.load);

// Definicion de rutas

router.get('/quizes', quizController.index);

// GET /quizes/question
router.get('/quizes/:quizId(\\d+)', quizController.show);

// GET /quizes/answer
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);

// GET /author
router.get('/author', function(req, res, next){
  res.render('author', { title: 'Autor', author: 'Roberto Serrano Diaz-Grande'});
});

module.exports = router;
