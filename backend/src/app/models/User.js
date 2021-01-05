import Sequelize, { Model } from 'sequelize';

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING(70),
                email: Sequelize.STRING(70),
                tags: Sequelize.STRING(300)
            },
            {
                sequelize
            }
        )

        return this;
    }
}

export default User;