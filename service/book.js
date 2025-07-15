const fs = require('fs')

function getAllBooks(){
    return JSON.parse(fs.readFileSync('books.json'))
}

function getBooksId(id){
    const books = JSON.parse(fs.readFileSync('books.json'))
    const filteredBook = books.filter(book => book.id === id) [0]
    
    return filteredBook
    
}

function insertBook(newBook){
    const books = JSON.parse(fs.readFileSync('books.json'))
    const newBookList = [...books, newBook]

    fs.writeFileSync('books.json', JSON.stringify(newBookList))
}

function modifyBook(modifications, id){
    let currentBooks = JSON.parse(fs.readFileSync('books.json'))
    const modifiedIndex = currentBooks.findIndex(book => book.id === id)

    const contentChanged = {...currentBooks[modifiedIndex], ...modifications}

    currentBooks[modifiedIndex] = contentChanged

    fs.writeFileSync('books.json', JSON.stringify(currentBooks))


}

module.exports = {
    getAllBooks,
    getBooksId,
    insertBook,
    modifyBook
}