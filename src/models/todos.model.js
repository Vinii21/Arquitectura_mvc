const db = require("../utils/database")
const {DataTypes} = require("sequelize")

const Todos = db.define("todos",{
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "category_id"
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field:"user_id"
    }
},{
    timestamps: true,
    updatedAt: false,
    createdAt: "created_at"
})

module.exports = Todos;