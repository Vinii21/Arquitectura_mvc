const Todos = require("../models/todos.model");
const Subcategories = require("../models/subcategories.model")
const TodosSubcategories = require("../models/todos_subcategories.model");

const getAllTodos = async (req, res) => {
    try {
        const todos = await Todos.findAll()
        res.json(todos)
    } catch (error) {
        res.status(400).json(error)
    }
}

const createTodo = async (req, res) => {
    try {
        const {title, description, categoryId, userId, subcategoryId} = req.body;
        
        const todo = await Todos.create({title, description, categoryId, userId})
        const subcategory = await Subcategories.findByPk(subcategoryId);
        if (subcategory) {
            await TodosSubcategories.create({todoId: todo.id, subcategoryId: subcategory.id})
            
        }


        res.status(201).send()
    } catch (error) {
        res.status(400).json(error)
    }
}

const updateStatus = async (req, res) => {
    try{
        const {id} = req.params;
        const {completed} = req.body;
        await Todos.update(
            {completed},
            {
                where: {id}
            }
        )
        res.status(201).send()
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteTodo = async (req, res) => {
    try {
        const {id} = req.params;
        await Todos.destroy({
            where: {id}
        })
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    createTodo,
    updateStatus,
    deleteTodo,
    getAllTodos
}