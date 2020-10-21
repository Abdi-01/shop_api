const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 2020
// Import conf database
const db = require('./database')

const App = express()

// fungsi untuk mengecek koneksi database
db.connect((err) => {
    if (err) {
        console.error('Error Connection :' + err.stack)
    }

    console.log("Connected as id :", db.threadId)
})

App.use(bodyParser())
App.use(cors())

const { usersRouter } = require('./routers')

App.get('/', (req, res) => {
    res.status(200).send("<h1>Welcome, this is Shop API</h1>")
})

App.use('/users', usersRouter)


App.listen(PORT, () => console.log("Connected to Shop API :", PORT))