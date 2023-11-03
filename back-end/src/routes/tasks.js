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

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get all tasks
 *     description: Retrieve a list of all tasks.
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get("/tasks", getTasks)

/**
 * @swagger
 * /tasks/count:
 *   get:
 *     summary: Get total number of tasks
 *     description: Retrieve the total number of tasks.
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get("/tasks/count", getTaskCount)

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Get a task by ID
 *     description: Retrieve a task by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the task
 *         type: string
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get("/tasks/:id", getTask)

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create a new task
 *     description: Create a new task.
 *     responses:
 *       200:
 *         description: Successful response
 */
router.post("/tasks", saveTask)

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Delete a task by ID
 *     description: Delete a task by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the task
 *         type: string
 *     responses:
 *       200:
 *         description: Successful response
 */
router.delete("/tasks/:id", deleteTask)

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Update a task by ID
 *     description: Update a task by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the task
 *         type: string
 *     responses:
 *       200:
 *         description: Successful response
 */
router.put("/tasks/:id", updateTask)

export default router
