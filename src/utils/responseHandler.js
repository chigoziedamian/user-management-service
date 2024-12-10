exports.successResponse = (res, statusCode, message, data = null) => {
    res.status(statusCode).json({
        status: 'success',
        message,
        data,
    });
};

exports.errorResponse = (res, statusCode, message) => {
    res.status(statusCode).json({
        status: 'error',
        message,
    });
};