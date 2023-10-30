import cors from "cors"
import express from "express"
import morgan from "morgan"
import { options } from "./swaggerOptions"

const specs = swaggerJsdoc(options)

import swaggerJsdoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import taskRoutes from "./routes/tasks"

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.use(taskRoutes)

app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs))

export default app
