const express = require('express')
const {default: fetch} = require('node-fetch')



const app = express()

app.get('/', (req, res) => {
    fetch("http://213.171.14.199:3005").then(res => res.json()).then(data => {
        res.send(`<h1>${data}</h1>`)
    })
})

app.listen(3000, () => {
    console.log('index.js reading')
})

