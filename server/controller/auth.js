const User = require('../modals/users')
const mongoose = require('mongoose')
const { generateToken, comparePassword, generatePassword } = require('../utils/tokens-generator');
const { generateToken04 } = require('../utils/zego-token');

module.exports = {
    loginRegistration: async (req, res) => {
        try {
            const body = req.body;
            if (body.email && body.password) {
                const checkIfUserExists = await User.findOne({ email: body.email })
                if (body.signUp) {
                    if (checkIfUserExists) {
                        return res.status(200).json({
                            success: false,
                            isError: true,
                            data: { errorMessage: 'Email already taken' },
                            message: 'Email already taken'
                        })
                    }
                    const password = await generatePassword(req.body)
                    req.body.password = password
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

    zegoGenerateTokenForCreateCalling: async (req, res) => {
        try {
            console.log(req.body)
            const token = generateToken04(716494437, req.body.userId, 'e95935004ef7483b21f8dfa6c9ccb78e', 3600, '')
            console.log("token", token)
            return res.status(200).json({
                success: true,
                isError: false,
                data: { token },
                message: 'Token successfuly generated'
            })
        } catch (error) {
            console.log(error)
        }
    },

    zegoGetTokenByRoomIdForJoinCalling: async () => {
        try {

        } catch (error) {

        }
    }
}