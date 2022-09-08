const User = require('../modals/users')
const mongoose = require('mongoose')
const { generateToken, comparePassword } = require('../utils/tokens-generator')

module.exports = {
    loginRegistration: async (req, res) => {
        try {
            const body = req.body;
            if (body.email && body.password) {
                if (body.signUp) {
                    const createUser = await User.create(body);
                    const token = await generateToken({ userId: createUser._id }, '23rf4f234', Math.floor(Date.now() / 1000) + (60 * 60))
                    return res.status(200).json({
                        success: true,
                        isError: false,
                        data: { ...createUser._doc, token: token },
                        message: 'User created successfully'
                    })
                }
                if (!body.signUp) {
                    const checkIfUserExists = await User.findOne({ email: body.email })
                    if (!checkIfUserExists) {
                        return res.status(404).json({
                            success: false,
                            isError: true,
                            data: { errorMessage: 'Invalid Email' },
                            message: 'Invalid Email'
                        })
                    } else {
                        const isPasswordCorrect = await comparePassword({
                            password: body.password, passwordHash: checkIfUserExists.password
                        })
                        if (isPasswordCorrect) {
                            const token = await generateToken({ userId: checkIfUserExists._id }, '23rf4f234', Math.floor(Date.now() / 1000) + (60 * 60))
                            return res.status(200).json({
                                success: true,
                                isError: false,
                                data: { ...checkIfUserExists._doc, token },
                                message: 'User login successfully'
                            })
                        } else {
                            return res.status(404).json({
                                success: false,
                                isError: true,
                                data: { errorMessage: 'Invalid password' },
                                message: 'Invalid password'
                            })
                        }
                    }
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

    zegoGenerateTokenForCreateCalling: async () => {
        try {

        } catch (error) {

        }
    },

    zegoGetTokenByRoomIdForJoinCalling: async () => {
        try {

        } catch (error) {

        }
    }
}