const Categories = require('../models/categories.model');

const createNewCategory = async (req, res) => {
    try{
        const {category} = req.body;
        await Categories.create({category})
        res.status(201).send();
    } catch (error) {
        res.status(400).json(error)
    }
};

const getAllCategories = async (req, res) => {
    try {
        const categories = await Categories.findAll()
        res.json(categories)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    createNewCategory,
    getAllCategories
}