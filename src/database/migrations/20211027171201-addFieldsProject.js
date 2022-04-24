'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return Promise.all([
      await queryInterface.addColumn('Projects','description',{
        type: Sequelize.STRING,
        
      }),
      await queryInterface.addColumn('Projects','gitLink',{
        type: Sequelize.STRING,
        
      }),
      await queryInterface.addColumn('Projects','liveLink',{
        type: Sequelize.STRING,
        
      }),
      await queryInterface.addColumn('Projects','image',{
        type: Sequelize.STRING,
        
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.all([
      await queryInterface.removeColumn('Projects','gitLink'),
      await queryInterface.removeColumn('Projects','liveLink'),
      await queryInterface.removeColumn('Projects','image'),
      await queryInterface.removeColumn('Projects','description'),
    ])
  }
};
