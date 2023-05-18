const {Router} = require("express")
const {createNewCategory, getAllCategories} = require("../controllers/categories.controller")

const router = Router()

router.post("/categories", createNewCategory)

router.get("/categories", getAllCategories)

module.exports = router;