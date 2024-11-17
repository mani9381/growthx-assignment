const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const userRoutes = require('./routes/user')
const assignmentsRoutes = require('./routes/assignments')
const authRoutes = require('./routes/auth')

const app = express()
const port = 80
const uri = "mongodb://127.0.0.1:27017/assignment"

app.use(cors())
app.use(express.json())
app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/users",userRoutes)
app.use("/api/v1/assignments",assignmentsRoutes)


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => {
    console.log(`app listening on port ${port}!`)
    mongoose.connect(uri)
    .then(()=>{
        console.log("Db Connected")
    })
    .catch(()=>{
        console.log("error while connecting db check uri and network")
    })
}) 