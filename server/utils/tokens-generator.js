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
    },
    generatePassword: async (object) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const password = await bcrypt.hash(object.password, salt)
            return password;
        } catch (error) {

        }
    },
}