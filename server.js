const express = require('express')
const connectDB = require('./config/db')

//const bodyParser = require('body-parser')
const studentRoutes = require('./routes/students.js')
//const cors = require('cors')
const app = express()
require('dotenv').config()

// app.use(cors())
// app.use(bodyParser.json())

//samething as above two lines
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })
connectDB()
app.use('/student', studentRoutes)

//port defining
const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})
