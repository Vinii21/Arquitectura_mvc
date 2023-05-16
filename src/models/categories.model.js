const db = require("../utils/database")
const {DataTypes} = require("sequelize")

const Categories = db.define("categories", {
    category: {
        type: DataTypes.STRING(30),
        allowNull: true
    }
}, {
    timestamps: false
})

module.exports = Categories;