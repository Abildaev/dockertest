const express = require('express')



const app = express()

app.get('/date', (req, res) => {
    res.send(new Date())
})


app.listen(3005, () => {
    console.log("date.js reading")
})