const express = require('express')
const fetch = require('node-fetch').default

const app = express()


app.get('/', (req, res) => {
    fetch("http://date:3005").then(res => res.json()).then(data => {
        res.send(`<h1>${data}</h1>`)
    })
})

app.listen(3000, () => {
    console.log('index.js reading')
})

