const bcrypt = require("bcryptjs")
const User = require('../models/user')
const jwt = require("jsonwebtoken")

class AuthController {
    async registration (req, res) {
        try {
            const {name, login, password} = req.body
            const candidate = await User.findOne({where: {
                login: login
            }})
            if (candidate) {
                return res.status(400).json({message: `User with email ${login} already exists`})
            }
            const admin = await User.findOne({where: {
                boss_id: null
            }})
            if (!admin) {
                return res.status(500).json({message: `Administrator doesn't exist`})
            }

            const hashPassword = await bcrypt.hash(password, 3)
            const newUser = User.build({
                name: name,
                login: login,
                password: hashPassword,
                boss_id: admin.id
            })
            await newUser.save()
            res.status(201).json({message: 'User was created'})
        } catch (e) {
            console.log(e)
            res.status(500).json({message: 'Registration error'})
        }
    }

    async login (req, res) {
        try {
            const {login, password} = req.body
            const user = await User.findOne({where: {
                login: login
            }})
            if (!user) {
                return res.status(404).json({message: "User not found"})
            }
            const isPassValid = bcrypt.compareSync(password, user.password)
            if (!isPassValid) {
                    return res.status(400).json({message: "Invalid password"})
            }
            const token = jwt.sign({id: user.id}, process.env.SECRETKEY, {expiresIn: "1h"})
            return res.json({
                token,
                user: {
                    id: user.id,
                    login: user.login,
                    name: user.name
                }
            })
        } catch (e) {
            console.log(e)
            res.status(500).json({message: 'Registration error'})
        }
    }
}

module.exports = new AuthController()