const express = require('express')
const cors = require('cors')
require('dotenv').config()

const AuthRouter = require('./routes/auth.router')
const UsersRouter = require('./routes/users.router')

const app = express()

const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

app.use('/api/auth/', AuthRouter)
app.use('/api/users/', UsersRouter)

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()


