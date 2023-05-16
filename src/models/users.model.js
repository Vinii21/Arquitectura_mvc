const db = require("../utils/database")
const {DataTypes} = require("sequelize")

const Users = db.define("users", {
    username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }/* ,
    todoId: {
        type: DataTypes.INTEGER,
        field: "todo_id"
    } */
})

module.exports = Users;