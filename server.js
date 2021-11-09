require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const cors = require('cors')
const Router = require('./backend/routes/router')
require('./backend/db/connection')
//middleware
app.use(express.json())
app.use(cors())
app.use('/',Router)

app.listen(PORT,()=>{
    console.log(`listening on PORT ${PORT}`)
})