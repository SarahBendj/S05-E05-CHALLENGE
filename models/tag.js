'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Quiz}) {
      Tag.belongsToMany(Quiz , {
        as : "quiz",
        through : "quiz_has_tag",
        foreignKey : 'tag_id',
        otherKey : "quiz_id"
      })
      // define association here
    }
  }
  Tag.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tag',
    tableName:'tag',
  });
  return Tag;
};