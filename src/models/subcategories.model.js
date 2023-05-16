const db = require("../utils/database")
const {DataTypes} = require("sequelize")

const Subcategories = db.define("subcategories", {
    subcategory: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
},{
    timestamps: false
})

module.exports = Subcategories;