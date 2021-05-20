const database = require('../database/database');

exports.getBooks = function () {
    return database.query('select * from livro');
}

exports.getBook = function (bookId) {
    return database.query('select * from livro where id = $1', [bookId]);
}
exports.saveBook = (newBook) => {
    return database.one('insert into livro (nomeautor, assunto, editora, isbn, qtdestoque, nomelivro) values ($1, $2, $3, $4, $5, $6) returning *',
    [newBook.nomeautor, newBook.assunto, newBook.editora, newBook.isbn, newBook.qtdestoque, newBook.nomelivro]);
}

exports.deleteBook = (bookId) => {
    return database.none('delete from livro where id = $1', [bookId]);
}

exports.getClients= () => {
    return database.query('select * from cliente');
}

exports.getClient= (clientId) => {
    return database.query('select * from cliente where id = $1', [clientId]);
}

exports.saveClient = (client) => {
    return database.one('insert into cliente (cpfcnpj, nome, telefone) values($1, $2, $3) returning *', 
    [client.cpfcnpj, client.nome, client.telefone]);
}

exports.deleteClient = (clientId) => {
    return database.none('delete from cliente where id = $1', [clientId]);
}