const express = require("express")
const cors = require("cors")
const helmet = require("helmet")

const server = express()

server.use(helmet())
server.use(express.json())

server.get("/",(req, res) =>{
    res.json({yodaSays:"Server up it is"})
})
module.exports = server;