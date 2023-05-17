const {Router} = require("express")
const {createUser, getUserTodosById} = require("../controllers/users.controller")

const router = Router()

router.post("/users", createUser)

router.get("/users/:id", getUserTodosById)

module.exports = router;