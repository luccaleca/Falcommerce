//src/routes/index.js
const express = require('express');
const homeController = require('../controllers/homeController')

const router = express.Router();

router.get('/', homeController.welcome);

module.exports = router;