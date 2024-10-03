const jwt = require('jsonwebtoken');

const jwt_secret_key = 'prithivi_023$@12';  

exports.createToken = async (payload) => {
    try {
        return jwt.sign(payload, jwt_secret_key, {
            expiresIn: '1d', // Token expires in 1 day
        });
    } catch (err) {
        console.error('Error creating token:', err);
        throw new Error('Token creation failed');
    }
};
