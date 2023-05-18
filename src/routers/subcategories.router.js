const {Router} = require("express")
const {createNewSubcategory, getAllSubcategories} = require("../controllers/subcategories.controller")

const router = Router()

router.post("/subcategories", createNewSubcategory)

router.get("/subcategories", getAllSubcategories)

module.exports = router;