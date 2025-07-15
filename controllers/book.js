const { getAllBooks, getBooksId, insertBook, modifyBook, deleteBookId} = require('../service/book')

function getBooks(req, res) {
  try {
    const books = getAllBooks();
    res.send(books);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function getBook(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const book = getBooksId(id);
      if (book) {
        res.send(book);
      } else {
        res.status(404);
        res.send("Livro não encontrado");
      }
    } else {
      res.status(422);
      res.send("Id inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postBook(req, res) {
  try {
    const newBook = req.body;
    insertBook(newBook);
    res.status(201);
    res.send("Livro inserido com sucesso");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function patchBook(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const book = getBooksId(id);
      if (book) {
        const body = req.body;
        modifyBook(body, id);
        res.send("Item modificado com sucesso");
      } else {
        res.status(404);
        res.send("Livro não encontrado");
      }
    } else {
      res.status(422);
      res.send("Id inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteBook(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const book = getBooksId(id);
      if (book) {
        deleteBookId(id);
        res.send("Item deletado com sucesso");
      } else {
        res.status(404);
        res.send("Livro não encontrado");
      }
    } else {
      res.status(422);
      res.send("Id inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getBooks,
  getBook,
  postBook,
  patchBook,
  deleteBook,
};
