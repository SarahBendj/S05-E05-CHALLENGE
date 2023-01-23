'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Question}) {
      Answer.belongsTo(Question , {
        as : "questions",
        foreignKey : "question_id"
      })
      

      // define association here
    }
  }
  Answer.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Answer',
    tableName : "answer"
  });
  return Answer;
};