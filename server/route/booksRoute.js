const express = require('express');
const router = express.Router();
const bookService = require('../service/booksService');

//retorna um livro especificado selecionado pelo id
router.get('/book/:id', async function (req, res){
    const book = await bookService.getBook(req.params.id);
    res.json(book);
});

//retorna todos os livros cadastrados no banco de dados
router.get('/books', async function(req, res) {
    const books = await bookService.getBooks();
    res.json(books);
});

//deleta um registro de livro cadastrado no banco de dados
router.delete('/book/:id', async function(req, res){
    const book = await bookService.deleteBook(req.params.id);
    return res.json([{message: 'registro excluído com sucesso'}]);
});

//insere um registro de livro no banco de dados
router.put('/book', async function(req, res){
    const livro = req.body;
    const newLivro = await bookService.saveBook(livro);
    return res.json(newLivro);
});

router.get('/clients', async function(req, res){
    const clients = await bookService.getClients();
    return res.json(clients);
});

router.get('/client/:id', async function(req, res){
    const client = await bookService.getClient(req.params.id);
    return res.json(client);
});

router.put('/client', async function(req, res){
    const client = await bookService.saveClient(req.body);
    return res.json(client);
});

router.delete('/client/:id', async function(req, res){
    const client = await bookService.deleteClient(req.params.id);
    return res.json([{message: 'registro excluído com sucesso!'}]);
});

module.exports = router;