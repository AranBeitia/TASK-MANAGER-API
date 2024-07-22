const express = require('express')
const app = express()
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')
const cors = require('cors')

require('dotenv').config()

const PORT = process.env.PORT || 3001

const { dbConnection } = require('./config/config')

app.use(cors())

app.use(express.json())

dbConnection()

app.use('/tasks', require('./routes/tasks'))

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs))

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
