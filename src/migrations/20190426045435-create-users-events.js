module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users_events', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            event_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users_events');
    }
};
