const Todos = require("../models/todos.model")

const createTodo = async (req, res) => {
    try {
        const {title, description, categoryId, userId} = req.body;
        await Todos.create({title, description, categoryId, userId})
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
    deleteTodo
}