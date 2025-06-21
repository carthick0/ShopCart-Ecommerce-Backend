const InternalServerError = require("../errors/internal_server_error");
const ConflictError = require("../errors/conflict_error");
const NotFoundError = require("../errors/not_found_error");
const bcrypt = require('bcrypt');
const { generateJWT } = require("../utlis/auth");

class UserService {
    constructor(repository) {
        this.repository = repository;
    }

    async createUser(data) {
        try {

            const response = await this.repository.createUser(data);
            return response;
        } catch (error) {
            if (error.name === "SequelizeUniqueConstraintError") {
                throw new ConflictError("User", error.errors[0].message);
            }

            if (error.name === "SequelizeValidationError") {
                throw new InternalServerError(); // Skip custom BadRequest for now
            }

            console.log("UserService createUser error:", error);
            throw new InternalServerError();
        }
    }

    async getAllUsers() {
        try {
            return await this.repository.getAllUsers();
        } catch (error) {
            console.log("UserService getAllUsers error:", error);
            throw new InternalServerError();
        }
    }

    async getUser(id) {
        try {
            const response = await this.repository.getUser(id);
            if (!response) {
                throw new NotFoundError("User", "id", id);
            }
            return response;
        } catch (error) {
            if (error.name === "NotFoundError") throw error;
            console.log("UserService getUser error:", error);
            throw new InternalServerError();
        }
    }

    async deleteUser(id) {
        try {
            return await this.repository.deleteUser(id);
        } catch (error) {
            console.log("UserService deleteUser error:", error);
            throw new InternalServerError();
        }
    }

    async signInUser(data) {
        try {
            if (!data.email) {
                console.log("Missing email");
                return null;
            }
            if (!data.password) {
                console.log("Missing password");
                return null;
            }

            const user = await this.repository.getUserByEmail(data.email);

            if (!user) {
                console.log("User not found with email:", data.email);
                return null;
            }

            const doesPasswordMatch = bcrypt.compareSync(data.password, user.password);

            if (!doesPasswordMatch) {
                console.log("Password mismatch");
                return null;
            }
            return generateJWT({ email: user.email, id: user.id })


        } catch (error) {
            console.log("UserService signInUser error:", error);
            throw new InternalServerError(); // keep this to wrap unknown issues
        }
    }

}

module.exports = UserService;