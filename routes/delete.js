const express = require('express');
const router = express.Router();

const usersController = require('../controllers/add_controller');

// get request to delete todo from the database
router.get('/', usersController.delete);

module.exports = router;