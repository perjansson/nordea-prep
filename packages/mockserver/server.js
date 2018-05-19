import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import delay from 'express-delay'

import apiRoutes from 'apiRoutes'

const API_BASE_PATH = '/prep-api/1.0'
const API_SERVER_PORT = 8089

const app = express()
const isProduction = process.env.NODE_ENV === 'production'
const responseDelay = process.env.WITH_DELAY

app.use(cors())
app.use(bodyParser.json())
app.use(morgan(isProduction ? 'combined' : 'dev'))
if (responseDelay) {
    console.log(`Using delay of 0-${responseDelay}ms`)
    app.use(delay(0, responseDelay))
}

app.use(API_BASE_PATH, apiRoutes(express.Router()))
app.listen(API_SERVER_PORT)

const serverPath = `http://localhost:${API_SERVER_PORT}${API_BASE_PATH}`
console.log(`Started mock server with api on: ${serverPath}`)
