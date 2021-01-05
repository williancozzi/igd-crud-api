import User from '../models/User';

class UserController {
    async index(req, res) {
        const { page = 1 } = req.query;

        try {
            const user = await User.findAll();

            return res.json(user);

        } catch (error) {
            res.json(error);
        }
    }

    async getById(req, res) {
        const { id } = req.params;

        const user = await User.findByPk(id);

        return res.json(user);
    }
}

export default new UserController();