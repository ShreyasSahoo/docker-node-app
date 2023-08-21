const express = require('express')
const { homeRouter } = require('./routes/homeRouter')
const app = express()
app.use('/', homeRouter)
app.listen(3500, () => {
    console.log('server running on port 3500')
})