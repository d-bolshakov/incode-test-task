const {QueryTypes} = require('sequelize')
const User = require('../models/user')
const db = require('../utils/database')

class UsersController {
    async getList (req, res) {
        try {
            const list = await UsersController.findSubordinates(req.user.id)
            res.status(200).json(list)
        } catch (e) {
            console.log(e)
            res.status(500).json({message: 'Unknown error'})
        }
    }

    async change (req, res) {
        try {
            const {subordinate_id, boss_id} = req.body
            if (subordinate_id === req.user.id) 
                return res.status(400).json({message: "User can't change his own subordination"})
            if (subordinate_id === boss_id) 
                return res.status(400).json({message: "A subordinate can't be his own boss"})
            const list = await UsersController.findSubordinates(req.user.id)
            if (list.findIndex(s => s.id === subordinate_id) < 0)
                return res.status(400).json({message: "User with id " + subordinate_id + " doesn't exist"})
            if (list.findIndex(s => s.id === boss_id) < 0) 
                return res.status(400).json({message: "User with id " + boss_id + " doesn't exist"})
            const subordinate = list.find(s => s.id === subordinate_id)
            if (subordinate.boss_id === boss_id)
                return res.status(400).json({message: "User with id " + boss_id + " is already a boss of a user with id " + subordinate_id})
            await User.update({boss_id: boss_id}, {
                where: {
                    id: subordinate_id
                }
            })
            return res.status(200).json({message: "Subordination was changed successfully"})
        } catch (e) {
            console.log(e)
            res.status(500).json({message: 'Unknown error'})
        }
    }

    static async findSubordinates (user_id) {
        try {
            const query = 'WITH RECURSIVE subordinates AS (SELECT id, name, boss_id FROM "Users" WHERE id = $id UNION SELECT e.id, e.name, e.boss_id FROM "Users" e INNER JOIN subordinates s ON s.id = e.boss_id) SELECT * FROM subordinates ORDER BY boss_id;'
            const users = await db.query(query,            
                {
                    type: QueryTypes.SELECT,
                    bind: {
                        id: user_id
                    }
                }
            )
            return users
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new UsersController()