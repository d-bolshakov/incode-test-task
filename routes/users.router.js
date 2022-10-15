const Router = require('express')
const UsersController = require('../controllers/users.controller')
const AuthMiddleware = require('../middlewares/auth.middleware')
const {validateChange} = require('../middlewares/validation/changeValidation.middleware')
const {Validation} = require('../middlewares/validation/validation.middleware')

const router = new Router()

router.get('/',
    AuthMiddleware,
    UsersController.getList
)
router.put('/change',
    AuthMiddleware,
    validateChange,
    Validation,
    UsersController.change
)

module.exports = router