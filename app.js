const express = require('express')
const routeBook = require('./routes/book')

const app = express()

app.use('/livros', routeBook)

const port = 8000

app.listen(port, () =>  {
    console.log(`Server is running on port ${port}`)
})


