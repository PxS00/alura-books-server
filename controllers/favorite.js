const {
  getAllFavorites,
  insertFavorite,
  deleteFavoriteId,
} = require('../service/favorite');

function getFavorites(req, res) {
  try {
    const books = getAllFavorites();
    res.send(books);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postFavorite(req, res) {
  try {
    const id = req.params.id;

    insertFavorite(id);
    res.status(201);
    res.send('Livro inserido com sucesso');
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteFavorite(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      deleteFavoriteId(id);
      res.send('Item deletado com sucesso');
    } else {
      res.status(422);
      res.send('Id inválido');
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getFavorites,
  postFavorite,
  deleteFavorite,
};
