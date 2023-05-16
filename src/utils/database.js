const {Sequelize} = require("sequelize")

const db = new Sequelize({
    host: "localhost",
    port: 5432,
    username: "postgres",
    database: "todo_crud_mvc",
    password: "root",
    dialect: "postgres"
})

module.exports = db;