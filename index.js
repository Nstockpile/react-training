console.log('index loaded')

const express = require('express')

const app = express()

app.get('/',(req, res) => {
    res.status(200)
    res.json({
        'test': 'check' ,
        'eh': 'coimbatore' 
    })
})

app.listen(3000)