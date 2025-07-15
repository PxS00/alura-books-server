const fs = require('fs')
function getAllBooks(){
    return JSON.parse(fs.readFileSync('books.json'))
}

function getBooksId(id){
    const books = JSON.parse(fs.readFileSync('books.json'))

    const filteredBook = books.filter(book => book.id === id) [0]
    return filteredBook
    
}

module.exports = {
    getAllBooks,
    getBooksId
}