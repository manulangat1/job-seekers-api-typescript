'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Tags.hasMany(models.Blog,{
      //   foreignKey:'tagId'
      // })
    }
  };
  Tags.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tags',
  });
  return Tags;
};