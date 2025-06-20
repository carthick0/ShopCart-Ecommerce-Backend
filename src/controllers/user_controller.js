const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const UserRepository = require("../repositories/user_repository");
const UserService = require("../services/user_service");
const errorResponse = require("../utlis/error_response");

const userService = new UserService(new UserRepository());


async function createUser(req, res) {
    try {
        const response = await userService.createUser(req.body);
        console.log("request body:", req.body)
        return res
            .status(StatusCodes.CREATED)
            .json({
                success: true,
                message: 'Successfully created User',
                data: response
            })
    } catch (error) {
        console.log("User Controller: Something went wrong", error);
        return res.status(error.statusCode).json(errorResponse(ReasonPhrases.INTERNAL_SERVER_ERROR, error))
    }
}

async function getAllUsers(req, res) {
    try {
        const response = await userService.getAllUsers(req.body);

        return res
            .status(StatusCodes.OK)
            .json({
                success: true,
                message: 'Successfully displaying Users',
                data: response
            })
    } catch (error) {
        console.log("User Controller: Something went wrong", error);
        return res.status(error.statusCode).json(errorResponse(ReasonPhrases.INTERNAL_SERVER_ERROR, error))
    }
}

async function getUser(req, res) {
    try {
        const response = await userService.getUser(req.params.id)
        return res
            .status(StatusCodes.OK)
            .json({
                success: true,
                message: 'Successfully fetched user',
                data: response
            })
    } catch (error) {
        console.log("User Controller: Something went wrong", error);
        return res.status(error.statusCode).json(errorResponse(ReasonPhrases.INTERNAL_SERVER_ERROR, error))
    }
}

async function deleteUser(req, res) {
    try {
        const response = await userService.deleteUser(req.params.id);
        return res.
        status(StatusCodes.OK)
            .json({
                success: true,
                message: 'Successfully deleted User',
                data: response
            })
    } catch (error) {
        console.log("User Controller: Something went wrong", error);
        return res.status(error.statusCode).json(errorResponse(ReasonPhrases.INTERNAL_SERVER_ERROR, error))
    }
};

async function signInUser(req, res) {
    try {
        const response = await userService.signInUser(req.body);

        if (!response) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password',
                data: null
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Successfully logged in User',
            data: response
        });

    } catch (error) {
        console.log("Controller signInUser error:", error);
        return res.status(error.statusCode || 500).json({
            success: false,
            message: error.errorMsg || "Something went wrong",
            data: null
        });
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getUser,
    deleteUser,
    signInUser
}