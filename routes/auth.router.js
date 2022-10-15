const Router = require('express')
const AuthController = require('../controllers/auth.controller')
const {validateRegistration} = require('../middlewares/validation/registrationValidation.middleware')
const {validateLogin} = require('../middlewares/validation/loginValidation.middleware')
const {Validation} = require('../middlewares/validation/validation.middleware')

const router = new Router()

router.post('/registration',
    validateRegistration, 
    Validation,
    AuthController.registration)
router.post('/login',
    validateLogin, 
    Validation,
    AuthController.login)

    module.exports = router