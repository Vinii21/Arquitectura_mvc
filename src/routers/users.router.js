const {Router} = require("express")
const {createUser, getUserTodosById, getAllUsers} = require("../controllers/users.controller")

const router = Router()

router.post("/users", createUser)

router.get("/users/:id", getUserTodosById)

router.get("/users", getAllUsers)

module.exports = router;