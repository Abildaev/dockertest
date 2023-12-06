const express = require('express')
const fetch = require('node-fetch').default

const app = express()

const DATE_SERVER_HOST = process.env.DATE_SERVER_HOST || "http://localhost:3005"
app.get('/', (req, res) => {
    fetch(DATE_SERVER_HOST).then(res => res.json()).then(data => {
        res.send(`<h1>${data}</h1>`)
    })
})

app.listen(3000, () => {
    console.log('index.js reading')
})

