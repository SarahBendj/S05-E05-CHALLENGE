const { sequelize, Answer } = require("../models");

const answerController = {
  showAnswer: async (request, response) => {
    try {
      const Answers = await Answer.findAll();
      response.render("answers", { Answers });
    } catch (error) {
      console.error(error);
    }
  },
  OneAnswer : async (request , response)=> {
    const theAnswer = await Answer.findByPk(2 ,{
        include : ["questions"]
    })
    response.render('OneAns' , {theAnswer})

  }
};
module.exports = answerController;
