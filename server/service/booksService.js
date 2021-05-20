const booksData = require('../data/booksData');

exports.getBooks = function() { 
    return booksData.getBooks();
}

exports.getBook = function(bookId) { 
    return booksData.getBook(bookId);
}

exports.deleteBook = function(bookId) { 
    return booksData.deleteBook(bookId);
}

exports.saveBook = (book) => {
    return booksData.saveBook(book);
}

exports.getClients = () => {
    return booksData.getClients();
}

exports.getClient = (clientId) => {
    return booksData.getClient(clientId);
}

exports.saveClient = (client) => {
    return booksData.saveClient(client);
}

exports.deleteClient = function(clientId) { 
    return booksData.deleteClient(clientId);
}