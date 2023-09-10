const express = require('express')

const app = express()
app.use(express.json())

const endpoint = require('./routes/endpoint')
app.use('/api', endpoint)

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server Listening On: ${PORT}`)
})