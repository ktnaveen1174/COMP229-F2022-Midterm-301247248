/* File name: book.js
* Student name: Naveen Kanmani Thirunavukkarasu
* Student ID: 301247248
* Date: Oct 31, 2022 */

let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number,
    genre: String
},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);