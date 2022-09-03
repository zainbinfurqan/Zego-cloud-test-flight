const jwt = require('jsonwebtoken')

module.exports = {
    generateToken: async (data, secretKey, expireDate) => {
        return await jwt.sign({
            exp: expireDate,
            data: data
        }, secretKey);
    },
}