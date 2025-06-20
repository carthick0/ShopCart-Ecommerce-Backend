const BadRequest = require("../errors/bad_request_error");
const InternalServerError = require("../errors/internal_server_error"); // Make sure this exists
const ConflictError = require("../errors/conflict_error");
const NotFoundError = require("../errors/not_found_error");

class UserService {
    constructor(repository) {
        this.repository = repository;
    }

    async createUser(data) {
        try {
            if (!data.email) throw new BadRequest("email");
            if (!data.password) throw new BadRequest("password");

            const response = await this.repository.createUser(data);
            return response;
        } catch (error) {
            if (error.name === "SequelizeUniqueConstraintError") {
                throw new ConflictError("User", error.errors[0].message);
            }

            console.log("UserService createUser error:", error);
            throw new InternalServerError();
        }
    }

    async getAllUsers() {
        try {
            const response = await this.repository.getAllUsers();
            return response;
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
            if (error.name === "NotFoundError") {
                throw error;
            }
            console.log("UserService getUser error:", error);
            throw new InternalServerError();
        }
    }

    async deleteUser(id) {
        try {
            const response = await this.repository.deleteUser(id);
            return response;
        } catch (error) {
            console.log("UserService deleteUser error:", error);
            throw new InternalServerError();
        }
    }
}

module.exports = UserService;