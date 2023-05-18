const {Router} = require("express")
const {createNewSubcategory} = require("../controllers/subcategories.controller")

const router = Router()

router.post("/subcategories", createNewSubcategory)

module.exports = router;