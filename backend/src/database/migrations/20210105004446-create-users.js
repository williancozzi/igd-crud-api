'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING(70)
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING(70),
                unique: true
            },
            tags: {
                allowNull: false,
                type: Sequelize.STRING(300)
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false
            }
        });

    },

    down: async (queryInterface) => {
        await queryInterface.dropTable('users');

    }
};
