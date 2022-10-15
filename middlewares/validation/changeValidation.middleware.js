const {check} = require('express-validator')

exports.validateChange = [
    check('subordinate_id')
        .not()
        .isEmpty()
        .withMessage('Subordinate id is empty')
        .isNumeric()
        .withMessage('Subordinate id is not a number'),
    check('boss_id')
        .not()
        .isEmpty()
        .withMessage('Boss id is empty')
        .isNumeric()
        .withMessage('Boss id is not a number'),
]