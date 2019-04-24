// import express from 'express'
const express = require('express')
require('express-group-routes')

const app = express()


const port = process.env.PORT || 3000

app.listen(port)

app.get("/", (req, res) => {
    res.json({'hello': 'word'})
})

const routes = require('./geradorRoutes')

routes(app)

console.log("Melhor api do mundo iniciada na porta " + port)