const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const { errorResponse } = require('../utils/responseHandler');

exports.authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return errorResponse(res, 401, 'Access denied. No token provided.');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();
    } catch (error) {
        errorResponse(res, 400, 'Invalid token.');
    }
};