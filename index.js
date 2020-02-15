const express = require('express')
const setUpDB = require('./config/database')
const router = require('./config/routes')

const port = 3020
const app = express()

setUpDB()

// app.get('/welcome', (req, res) => {
//     res.send('welcome')
// })

app.use(express.json())
app.use('/', router)

app.listen(port, () => {
    console.log('listening to the port', port)
})