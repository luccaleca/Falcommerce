const UserService = require('../services/userService');

exports.registerUser = async (req, res) => {
    try {
        const userData = req.body;
        const newUser = await UserService.createUser(userData);
        res.status(201).json({ message: 'User successfully registered!', user: newUser });
    } catch (error) {
        res.status(500).json({ error: 'Error in registering user' });
    }
};