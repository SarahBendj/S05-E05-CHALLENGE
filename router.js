const { Router } = require('express')
const questionController = require('./controllers.js/questionController')
const levelController = require('./controllers.js/levelController')
const quizController = require('./controllers.js/quizController')
const answerController = require('./controllers.js/answerController')
const router = new Router

router.get("/question", questionController.showQuestions)
router.get("/level" , levelController.levelReveal)
router.get("/quizz",quizController.showAllQuizzes)
router.get("/quizz/:id" , quizController.oneQuiz)
router.get("/answer" ,answerController.showAnswer)
router.get("/ann" , answerController.OneAnswer)
module.exports = router