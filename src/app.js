const port = process.env.PORT || 3000

const express = require('express')
const path = require('path')

const app = express()
const publicDirectoryPath=path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))

app.listen(port, () => {
    console.log('Server dinleniyor.')
})