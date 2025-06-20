const { where } = require("sequelize");
const { User } = require("../models");

class UserRepository {
    async createUser(data) {
        return await User.create(data);
    }

    async getAllUsers() {
        return await User.findAll()
    }

    async getUser(id) {
        return await User.findByPk(id);
    }

    async deleteUser(id) {
        return await User.destroy({
            where: { id }
        });
    }
    async getUserByEmail(email) {
        try {
            return await User.findOne({
                where: {
                    email: email
                }
            })
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = UserRepository;