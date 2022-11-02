/* File name: index.js
* Student name: Naveen Kanmani Thirunavukkarasu
* Student ID: 301247248
* Date: Oct 31, 2022 */

let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home'});
}
