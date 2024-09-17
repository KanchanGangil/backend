const UserModel = require("../models/user");

class UserController {

    static userInset = async (req, res) => {
        try {
            const { name, email } = req.body
            const result = new UserModel({
                name: name,
                email: email
            })
            await result.save()
            // console.log(result);
            res.status(201).json({
                status: "success",
                message: "User Inserted Successfully 😃🍻",
            });
        } catch (erorr) {
            console.log(error);
        }
    }

    static getAllUser = async (req, res) => {
        try {
            const users = await UserModel.find()
            // console.log(users);
            res.status(201).json({
                status: 'success',
                message: 'Users',
                users,
            })

        } catch (error) {
            console.log(error);
        }
    }
    static viewUser = async (req, res) => {
        try {
            const user = await UserModel.findById(req.params.id)
            console.log(user);
            res.status(201).json({
                status: 'success',
                message: 'successfull',
                user,
            })

        } catch (error) {
            console.log(error);
        }
    }
    static updateUser = async (req, res) => {
        try {
            const { name, email } = req.body
            const user = await UserModel.findByIdAndUpdate(req.params.id, {
                name: name,
                email: email
            })
            console.log(user);
            res.status(201).json({
                status: 'success',
                message: 'successfull',
                user,
            })
        } catch (error) {
            console.log(error);
        }
    }
    static deleteUser = async (req, res) => {
        try {
            await UserModel.findByIdAndDelete(req.params.id)
            res.status(201).json({
                status: 'success',
                message: 'Delete Successfully',
            })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UserController