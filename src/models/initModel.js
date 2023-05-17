const Users = require("./users.model")
const Todos = require("./todos.model")
const Categories = require("./categories.model")
const Subcategories = require("./subcategories.model")
const TodosSubcategories = require("./todos_subcategories.model")

const initModels = () => {
    Todos.belongsTo(Users, {foreignKey: "userId"})
    Users.hasMany(Todos, {foreignKey: "userId"})

    Todos.belongsTo(Categories, {foreignKey: "categoryId"})
    Categories.hasMany(Todos, {foreignKey: "categoryId"})

    Todos.belongsToMany(Subcategories, {through: TodosSubcategories, foreignKey:"todoId", otherKey:"subcategoryId", timestamps: false})
    Subcategories.belongsToMany(Todos, {through: TodosSubcategories, foreignKey:"todoId", otherKey:"subcategoryId", timestamps: false})
}

module.exports = initModels;