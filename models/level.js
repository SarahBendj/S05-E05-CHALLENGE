'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Level extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Question}) {
      Level.hasMany(Question , {
        as : "questions",
        foreignKey : 'level_id'
      })
        
    
      // define association here
    }
  }
  Level.init({
    name:
    {type:DataTypes.STRING,
      allowNull : false }
  }, {
    sequelize,
    modelName: 'Level',
    tableName : 'level',
  });
  return Level;
};