import { Router } from "express"
import {
  deleteTask,
  getTask,
  getTaskCount,
  getTasks,
  saveTask,
  updateTask,
} from "../controllers/tasks"

const router = Router()

router.get("/task", getTasks)

router.get("/task/count", getTaskCount)

router.get("/task/:id", getTask)

router.post("/task", saveTask)

router.delete("/task/:id", deleteTask)

router.put("/task/:id", updateTask)

export default router
