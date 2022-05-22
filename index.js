const express = require("express")
const { PrismaClient } = require("@prisma/client")
const path = require("path")
const cors = require("cors")

const app = express()
const prisma = new PrismaClient()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "./views"))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", async (req, res) => {
    const diseases = await prisma.disease.findMany()
    res.render("index", {
        "diseases": diseases
    })
})

app.get("/search", async (req, res) => {
    let query = req.query.query
    let diseases = await prisma.disease.findMany({
        where: {
            name: {
                contains: query
            }
        }
    })
    res.render("index", {
        "diseases": diseases
    })
})

app.listen(3000, () => {
    console.log("App Running on port 3000")
})