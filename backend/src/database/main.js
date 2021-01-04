import sequelize from 'sequelize';
import databaseConfig from '../config/database';

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new sequelize(databaseConfig);
    }
}

export default new Database();