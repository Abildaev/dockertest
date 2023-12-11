const express = require('express')
const os= require ('os')

const app = express()

app.get('/', (req, res) => {
    res.send(new Date())
})


app.listen(3005, () => {
    console.log("date.js reading", os.version())
})