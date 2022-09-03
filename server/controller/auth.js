const User = require('../modals/user')
const mongoose = require('mongoose')
const { generateToken } = require('../utils/tokens-generator')

module.exports = {
    loginRegistration: async (req, res) => {
        try {
            const body = req.body;
            if (body.userName) {
                body.userName = body.userName + Math.floor(Math.random() * 100);
                body.email = body.userName + '@example.com'
                body.fullName = ''
                body.password = ''
                const checkIfUserExsist = await User.findOne({ userName: body.userName })
                if (!checkIfUserExsist) {
                    const createUser = await User.create(body);
                    const token = await generateToken({ userId: createUser._id }, '23rf4f234', Math.floor(Date.now() / 1000) + (60 * 60))
                    return res.status(200).json({
                        success: true,
                        isError: false,
                        data: { ...createUser._doc, token: token },
                        message: 'User created successfully'
                    })
                } else {
                    return res.status(404).json({
                        success: true,
                        isError: true,
                        data: { errorMessaege: 'user not found' },
                        message: ''
                    })
                }
            } else {
                return res.status(404).json({
                    success: true,
                    isError: true,
                    data: { errorMessaege: 'user not found' },
                    message: ''
                })
            }
        } catch (error) {
            console.log(error)
        }
    },
}