/* File name: index.js
* Student name: Naveen Kanmani Thirunavukkarasu
* Student ID: 301247248
* Date: Oct 31, 2022 */

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

module.exports = router;
