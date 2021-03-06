import User from '../models/User';
import * as Yup from 'yup';

class UserController {

    async getAll(req, res) {
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

            name: Yup.string().required().max(50),
            email: Yup.string().email().required().max(30),
            tags: Yup.string().required().max(100)

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

    async update(req, res) {
        const schema = Yup.object().shape({

            name: Yup.string().max(50),
            tags: Yup.string().max(100)

        });

        try {
            const { id } = req.params;
            const user = await User.findByPk(id);

            if (!user) {
                return res.status(400).json({ error: "User not found!" });
            }

            const validFields = await schema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true
            });

            const { name, tags } = await user.update(validFields);

            return res.json({ name, tags });
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findByPk(id);

            if (!user) {
                return res.status(400).json({ error: "User not found!" });
            } else {
                user.destroy(id);
            }

            return res.status(200).json({ message: `User ${id} deleted` });

        } catch (error) {
            return res.status(400).json(error);
        }
    }
}

export default new UserController();