const express = require('express')
const package = require('./package');
const routes_gerador = require('./routes/geradorRoutes')
const routes_validador = require('./routes/validadorRoutes')
require('express-group-routes')

const app = express()

const port = process.env.PORT || 3000

app.listen(port)

app.get("/", (req, res) => {
    res.json(package)
})

routes_gerador(app)
routes_validador(app)

console.log("Melhor api do mundo iniciada na porta " + port)