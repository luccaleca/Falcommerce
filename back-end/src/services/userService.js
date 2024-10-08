const bcrypt = require('bcrypt');
const User = require('../models/userModels');

exports.createUser = async (userData) => {
    const { name, email, password } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = new User({
        name: name,
        email: email,
        password: hashedPassword, 
    });

    return await user.save();
};