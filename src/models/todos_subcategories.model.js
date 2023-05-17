const db = require("../utils/database")
const {DataTypes} = require("sequelize")


const TodosSubcategories = db.define("todos_subcategories", {
    todoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "todo_id",
    },
    subcategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "subcategory_id"
    }
},{
    timestamps: false
})

module.exports = TodosSubcategories;