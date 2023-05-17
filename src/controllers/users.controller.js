const Users = require("../models/users.model")
const Todos = require("../models/todos.model")
const Categories = require("../models/categories.model")
const Subcategories = require("../models/subcategories.model")
const Todos_subcategories = require("../models/todos_subcategories.model")

const createUser = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        await Users.create({username, email, password})
        res.status(201).send()
    } catch (error) {
        res.status(400).json(error)
    }
}

const getUserTodosById = async (req, res) => {
    try{
        const {id} = req.params;


        const user = await Users.findOne({
            where: {id},
            include: {
                model: Todos,
                attributes: ["id","title","description", "categoryId"],
                include: [
                    {
                        model: Categories,
                    },
                    {
                        model: Subcategories,
                        attributes: ["subcategory"]
                    }
                ]
            } 
        })


        res.json(user)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    createUser,
    getUserTodosById
}