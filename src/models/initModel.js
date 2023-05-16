const Users = require("./users.model")
const Todos = require("./todos.model")
const Categories = require("./categories.model")
const Subcategories = require("./subcategories.model")

const initModels = () => {
    Todos.belongsTo(Users, {foreignKey: "user_id"})
    Users.hasMany(Todos, {foreignKey: "user_id"})

    Todos.belongsTo(Categories, {foreignKey: "category_id"})
    Categories.hasMany(Todos, {foreignKey: "category_id"})

    Todos.belongsToMany(Subcategories, {through: "todos_subcategories", foreignKey:"todo_id", otherKey:"subcategory_id", timestamps: false})
    Subcategories.belongsToMany(Todos, {through: "todos_subcategories", foreignKey:"todo_id", otherKey:"subcategory_id", timestamps: false})
}

module.exports = initModels;