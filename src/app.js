const express = require("express")
require("dotenv").config()
const db = require("./utils/database")
const initModels = require("./models/initModel")
const UserRouter = require("./routers/users.router")

initModels();

const app = express()

app.use(express.json())

const port = process.env.PORT || 3000;

db.sync()
    .then(()=>{console.log("Base de datos sincronizada")})
    .catch((error)=>console.error(error))

app.get("/", (req, res)=>{
    res.send("Funciona")
})

app.use(UserRouter)

app.listen(port, () => {
    console.log(`Iniciado en el puerto ${port}`)
})