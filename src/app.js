require("dotenv-safe").config({ path: './.env' })

const express = require('express')
const bodyParser = require('body-parser')

const userRoutes = require('./routes/userRoutes')

const app = express()
app.use(bodyParser.json())

const hostname = '127.0.0.1'
const port = 4000


app.use('/user', userRoutes);

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});