const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { findUsername } = require('../model/userModel')
require('dotenv').config()

exports.login = async (req, res) => {
    const {user_name, password} = req.body;

    const user = await findUsername(user_name);
    if (!user) {
        return res.status(400).json({ message: 'Sai thông tin đăng nhập.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Sai thông tin đăng nhập.' });
    }

    const token = jwt.sign({ userId: user.user_id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });

    return res.json({ token });
}