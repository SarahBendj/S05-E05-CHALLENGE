'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Level ,Quiz , Answer }) {
      Question.belongsTo(Level , {
        as : 'level',
        foreignKey : 'level_id'
      }),
      Question.belongsTo(Quiz , {
        as : "quizzes",
        foreignKey : "quiz_id"

      }),
      Question.hasMany(Answer, {
        as : "answers",
        foreignKey : "question_id"
      }),
      Question.belongsTo(Answer , {
        foreignKey:"correct_answer_id"})
      // define association here
      //many to many
     
    }
    
  }
  Question.init({
    question: DataTypes.STRING,
    wiki: DataTypes.STRING,
    anecdote: DataTypes.STRING,
    description : DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Question',
    tableName: 'question'
  });
  return Question;
};