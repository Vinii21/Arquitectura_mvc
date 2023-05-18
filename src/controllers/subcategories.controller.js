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

const getAllSubcategories = async (req, res) => {
    try {
        const subcategories = await Subcategories.findAll()
        res.json(subcategories)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    createNewSubcategory,
    getAllSubcategories
}