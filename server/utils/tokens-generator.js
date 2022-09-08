const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
    generateToken: async (data, secretKey, expireDate) => {
        return await jwt.sign({
            exp: expireDate,
            data: data
        }, secretKey);
    },
    comparePassword: async (object) => {
        return await bcrypt.compare(object.password, object.passwordHash)
    }
}