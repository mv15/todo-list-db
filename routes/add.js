const express = require('express');
const router = express.Router();

const usersController = require('../controllers/add_controller');

// post request to add todo to the database
router.post('/', usersController.add);

module.exports = router;