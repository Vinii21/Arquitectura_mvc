const {Router} = require("express")
const {createTodo, updateStatus, deleteTodo, getAllTodos} = require("../controllers/todos.controller")

const router = Router()

router.post("/todos", createTodo)

router.put("/todos/:id", updateStatus)

router.delete("/todos/:id", deleteTodo)

router.get("/todos", getAllTodos)

module.exports = router;