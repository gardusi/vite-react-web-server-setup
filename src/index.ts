import express from 'express'
import ViteExpress from 'vite-express'
import { backendRouter } from './backend/router'
import { configDotenv } from 'dotenv'

configDotenv()

const app = express()

app.use(backendRouter())

ViteExpress.listen(app, 9000, () => console.log("Server is listening..."))
