const Subcategories = require("../models/subcategories.model")

const createNewSubcategory = async (req, res) => {
    try{
        const {subcategory} = req.body;
        await Subcategories.create({subcategory})
        res.status(201).send();
    } catch (error) {
        res.status(400).json(error)
    }
};

module.exports = {
    createNewSubcategory,
}