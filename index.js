const express = require('express')
const app = express()
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')

require('dotenv').config()

const PORT = process.env.PORT || 3001

const { dbConnection } = require('./config/config')

app.use(express.json())

dbConnection()

app.use('/tasks', require('./routes/tasks'))

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
