const {Router} = require("express")
const {createNewCategory} = require("../controllers/categories.controller")

const router = Router()

router.post("/categories", createNewCategory)

module.exports = router;