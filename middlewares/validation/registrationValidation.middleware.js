const {check} = require('express-validator')

exports.validateRegistration = [
    check('name')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Name is empty'),
    check('login')
        .normalizeEmail()
        .isEmail()
        .withMessage('Invalid email'),
    check('password')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Password is empty')
        .isLength({min: 3, max: 10})
        .withMessage('Password must be within 3 to 10 characters')
]