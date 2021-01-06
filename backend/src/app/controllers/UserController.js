import User from '../models/User';
import * as Yup from 'yup';

class UserController {
    async index(req, res) {
        const user = await User.findAll();

        return res.json(user);
    }

    async getById(req, res) {
        const { id } = req.params;

        const user = await User.findByPk(id);

        return res.json(user);
    }

    async create(req, res) {
        const schema = Yup.object().shape({

            name: Yup.string().required(),
            email: Yup.string().email(),
            tags: Yup.string().required()

        });

        try {
            const validFields = await schema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true
            });

            const { name, email, tags } = await User.create(validFields);

            return res.json({ name, email, tags });
        } catch (error) {
            return res.status(400).json(error);
        }

    }
}

export default new UserController();