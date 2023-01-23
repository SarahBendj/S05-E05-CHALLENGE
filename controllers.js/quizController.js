const { sequelize , Quiz , Question } = require('../models')

const quizController = {
    showAllQuizzes : async ( request , response) => {
        try{
            const quizzes = await Quiz.findAll()
        response.render('quizzes' , { quizzes})

        }catch(error){
            response.status(500).send('erreur')
            console.error(error)
        }
        
    },
    oneQuiz : async (request , response)=> {
        try{
            const id = request.params.id

            const questionId = await Question.findByPk(id , {
                include : [ "answers"]
            })
    
            const OneQuiz = await Quiz.findByPk(id , {
                include : ["users","questions"]
            })
         response.render("Onequizz" , {OneQuiz , questionId})
        }catch(error){
            response.status(500).send('erreur')
            console.error(error)
        }
        
    }

}
module.exports = quizController