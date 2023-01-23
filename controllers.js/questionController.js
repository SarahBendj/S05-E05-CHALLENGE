const { sequelize , Question } = require('../models')

const questionController = {
    
    showQuestions : async (request , response) => {
        const questionToDisplay = await Question.findByPk(1 , {
            include : [ "level", "answers"]
        })
        
        
        
        response.render('questions' , {questionToDisplay})
    }
}
module.exports = questionController